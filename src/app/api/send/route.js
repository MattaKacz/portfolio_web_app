import { Ga_Maamli } from 'next/font/google';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import path from 'path';
import { createLogger, format, transports } from 'winston';
import fs from 'fs';

// Upewnij się, że katalog logs istnieje
const logDir = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logDir)) {
	fs.mkdirSync(logDir);
}

const logger = createLogger({
	level: 'info',
	format: format.combine(
		format.timestamp(),
		format.printf(
			({ timestamp, level, message }) =>
				`${timestamp} [${level.toUpperCase()}] ${message}`
		)
	),
	transports: [
		new transports.File({
			filename: path.join(logDir, 'errors.log'),
			level: 'error',
		}),
		new transports.File({ filename: path.join(logDir, 'app.log') }),
	],
});

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
	
	const { email, subject, message } = await req.json();
	logger.info(`Received email: ${email}, subject: ${subject}`);
	try {
		throw new Error("Testowy błąd loggera!");
		const data = await resend.emails.send({
			from: fromEmail,
			to: ['mateusz.kaczor.mk@gmail.com'],
			replyTo: email,
			subject: subject,
			react: (
				<>
					<h1>{subject}</h1>
					<p>Thank you for contacting us!</p>
					<p>New message submitted:</p>
					<p>{message}</p>
				</>
			),
		});
		return NextResponse.json(data);
	} catch (error) {
		logger.error(`Send email error: ${error.stack || error}`);
		return NextResponse.json(
			{ error: error.message || 'Unknown error' },
			{ status: 500 }
		);
	}
}
