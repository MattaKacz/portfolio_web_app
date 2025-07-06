const { createLogger, format, transports } = require('winston');
const path = require('path');
const fs = require('fs');

// Ensure logs directory exists - use process.cwd() for Next.js compatibility
const logDir = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logDir)) {
	fs.mkdirSync(logDir, { recursive: true });
}

const logger = createLogger({
	level: 'info',
	format: format.combine(
		format.timestamp(),
		format.errors({ stack: true }),
		format.printf(({ timestamp, level, message, stack, ...meta }) => {
			// Format: 2025-07-05T12:01:32.751Z [ERROR] message
			let logLine = `${timestamp} [${level.toUpperCase()}] ${message}`;

			// Add stack trace if available
			if (stack) {
				logLine += `\n${stack}`;
			}

			// Add additional context if available
			if (Object.keys(meta).length > 0) {
				const context = Object.entries(meta)
					.filter(
						([key]) => !['timestamp', 'level', 'message', 'stack'].includes(key)
					)
					.map(([key, value]) => `${key}=${JSON.stringify(value)}`)
					.join(' ');
				if (context) {
					logLine += ` | ${context}`;
				}
			}

			return logLine;
		})
	),
	transports: [
		new transports.File({
			filename: path.join(logDir, 'errors.log'),
			level: 'error',
		}),
		new transports.File({
			filename: path.join(logDir, 'app.log'),
		}),
	],
});

// Console logs in development
if (process.env.NODE_ENV !== 'production') {
	logger.add(
		new transports.Console({
			format: format.combine(format.colorize(), format.simple()),
		})
	);
}

module.exports = logger;
