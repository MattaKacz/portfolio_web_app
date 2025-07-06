import { NextResponse } from 'next/server';
import logger from '../../../logger';

export async function POST(req) {
	try {
		const { error, userAgent, url, timestamp, userId, sessionId } =
			await req.json();

		// Validate required fields
		if (!error || !error.message) {
			return NextResponse.json(
				{ error: 'Missing required error information' },
				{ status: 400 }
			);
		}

		// Log client error with structured data
		logger.error('Client-side error', {
			error: {
				message: error.message,
				stack: error.stack,
				name: error.name,
				lineNumber: error.lineNumber,
				columnNumber: error.columnNumber,
				fileName: error.fileName,
			},
			context: {
				userAgent,
				url,
				timestamp: timestamp || new Date().toISOString(),
				userId,
				sessionId,
				endpoint: '/api/log-client-error',
				method: 'POST',
			},
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		// Log server error when processing client error
		logger.error('Failed to process client error log', {
			error: error.message,
			stack: error.stack,
			endpoint: '/api/log-client-error',
			method: 'POST',
		});

		return NextResponse.json(
			{ error: 'Failed to log client error' },
			{ status: 500 }
		);
	}
}
