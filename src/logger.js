const { createLogger, format, transports } = require('winston');
const path = require('path');
const fs = require('fs');

// Ensure logs directory exists
const logDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logDir)) {
	fs.mkdirSync(logDir, { recursive: true });
}

const logger = createLogger({
	level: 'info',
	format: format.combine(
		format.timestamp(),
		format.errors({ stack: true }),
		format.json()
	),
	transports: [
		new transports.File({
			filename: path.join(logDir, 'errors.log'),
			level: 'error',
			format: format.combine(
				format.timestamp(),
				format.errors({ stack: true }),
				format.json()
			),
		}),
		new transports.File({
			filename: path.join(logDir, 'app.log'),
			format: format.combine(
				format.timestamp(),
				format.errors({ stack: true }),
				format.json()
			),
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
