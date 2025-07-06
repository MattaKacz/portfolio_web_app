'use client';
import React from 'react';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		// Log error to our API
		this.logError(error, errorInfo);
	}

	logError = async (error, errorInfo) => {
		try {
			await fetch('/api/log-client-error', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					error: {
						message: error.message,
						stack: error.stack,
						name: error.name,
					},
					userAgent: navigator.userAgent,
					url: window.location.href,
					timestamp: new Date().toISOString(),
					errorInfo: {
						componentStack: errorInfo.componentStack,
					},
				}),
			});
		} catch (logError) {
			console.error('Failed to log error:', logError);
		}
	};

	render() {
		if (this.state.hasError) {
			return (
				<div className='min-h-screen flex items-center justify-center bg-gray-900 text-white'>
					<div className='text-center p-8'>
						<h1 className='text-2xl font-bold mb-4'>Something went wrong</h1>
						<p className='text-gray-400 mb-4'>
							We've been notified and are working to fix this issue.
						</p>
						<button
							onClick={() => window.location.reload()}
							className='bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors'>
							Reload Page
						</button>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
