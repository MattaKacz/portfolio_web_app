'use client';
import { useEffect } from 'react';

const GlobalErrorHandler = () => {
	useEffect(() => {
		// Handle unhandled promise rejections
		const handleUnhandledRejection = (event) => {
			event.preventDefault();
			logError({
				message: event.reason?.message || 'Unhandled Promise Rejection',
				stack: event.reason?.stack,
				name: 'UnhandledPromiseRejection',
				lineNumber: null,
				columnNumber: null,
				fileName: null,
			});
		};

		// Handle unhandled errors
		const handleError = (event) => {
			event.preventDefault();
			logError({
				message: event.error?.message || event.message || 'Unhandled Error',
				stack: event.error?.stack,
				name: event.error?.name || 'Error',
				lineNumber: event.lineno,
				columnNumber: event.colno,
				fileName: event.filename,
			});
		};

		// Log error to our API
		const logError = async (error) => {
			try {
				await fetch('/api/log-client-error', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						error,
						userAgent: navigator.userAgent,
						url: window.location.href,
						timestamp: new Date().toISOString(),
					}),
				});
			} catch (logError) {
				console.error('Failed to log error:', logError);
			}
		};

		// Add event listeners
		window.addEventListener('unhandledrejection', handleUnhandledRejection);
		window.addEventListener('error', handleError);

		// Cleanup
		return () => {
			window.removeEventListener(
				'unhandledrejection',
				handleUnhandledRejection
			);
			window.removeEventListener('error', handleError);
		};
	}, []);

	return null; // This component doesn't render anything
};

export default GlobalErrorHandler;
