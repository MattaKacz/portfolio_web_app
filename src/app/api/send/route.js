import { Ga_Maamli } from 'next/font/google';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import logger from '../../../logger';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
	const { email, subject, message } = await req.json();

	logger.info('Email form submitted', {
		email,
		subject,
		messageLength: message?.length || 0,
		endpoint: '/api/send',
		method: 'POST',
	});

	try {
		// Remove test error - uncomment for testing
		throw new Error('Test error for logger!');

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

		logger.info('Email sent successfully', {
			email,
			subject,
			messageId: data?.id,
		});

		return NextResponse.json(data);
	} catch (error) {
		logger.error('Failed to send email', {
			error: error.message,
			stack: error.stack,
			email,
			subject,
			endpoint: '/api/send',
			method: 'POST',
		});

		return NextResponse.json(
			{ error: error.message || 'Unknown error' },
			{ status: 500 }
		);
	}
}
