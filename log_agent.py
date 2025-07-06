import os
import time
import argparse
import requests
from datetime import datetime

LOG_DIR = "./logs"  # katalog z logami do monitorowania (lokalnie)
DASHBOARD_API = "http://127.0.0.1:8000/analyze"  # testowy endpoint
TOKEN = os.environ.get("DASHBOARD_TOKEN")
# ERROR_KEYWORDS nie są już potrzebne, bo czytamy tylko errors.log
OFFSET_DIR = os.path.join(LOG_DIR, ".offsets")  # katalog na offsety

os.makedirs(OFFSET_DIR, exist_ok=True)

def extract_new_errors(filepath, offset_path):
    last_offset = 0
    if os.path.exists(offset_path):
        with open(offset_path, "r") as f:
            last_offset = int(f.read().strip() or 0)
    with open(filepath, "r") as f:
        f.seek(last_offset)
        new_lines = f.readlines()
        new_offset = f.tell()
    # W errors.log wszystkie linie to błędy, więc nie filtrujemy
    # Zapisz nowy offset
    with open(offset_path, "w") as f:
        f.write(str(new_offset))
    return "".join(new_lines)

def send_log(log_content, filename):
    if not log_content.strip():
        print(f"[{filename}] No new errors found in errors.log, skipping.")
        return
    try:
        payload = {
            "filename": filename,
            "size": len(log_content),
            "upload_time": datetime.now().isoformat(),
            "log_count": log_content.count('\n'),
            "log_analysis_status": "pending",
            "analysis_result": None,
            "content": log_content  # Dodaj to pole do modelu LogFile w backendzie!
        }
        response = requests.post(
            "http://127.0.0.1:8000/logs_sql",
            headers={
                "Content-Type": "application/json",
                "Authorization": f"Bearer {TOKEN}" if TOKEN else "",
            },
            json=payload,
            timeout=10,
        )
        print(f"[{filename}] Sent: {response.status_code}")
        if response.status_code != 200:
            print(f"[{filename}] Response: {response.text}")
    except Exception as e:
        print(f"[{filename}] ERROR sending log: {e}")

def process_all_logs():
    # Wysyłaj tylko logi z errors.log
    errors_log_path = os.path.join(LOG_DIR, "errors.log")
    if os.path.exists(errors_log_path):
        offset_path = os.path.join(OFFSET_DIR, "errors.log.offset")
        errors = extract_new_errors(errors_log_path, offset_path)
        send_log(errors, "errors.log")
    else:
        print("errors.log not found, skipping.")

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--now", action="store_true", help="Send logs immediately (on demand)")
    args = parser.parse_args()

    if args.now:
        print("Sending errors.log on demand...")
        process_all_logs()
        return

    print("Starting scheduled errors.log sender (every 12 hours)...")
    while True:
        now = datetime.now()
        print(f"Sending errors.log at {now.isoformat()}")
        process_all_logs()
        # Sleep until next 12h interval (43200s)
        time.sleep(43200)

if __name__ == "__main__":
    main()