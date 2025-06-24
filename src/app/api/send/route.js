// // import { EmailTemplate } from '../../../components/email-template';
// import { Resend } from 'resend';
// import { NextResponse } from 'next/server';

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST(req, res) {
// 	const { body } = await req.json();
// 	const { email, subject, message } = body;
// 	try {
// 		const { data, error } = await resend.emails.send({
// 			from: fromEmail,
// 			to: ['mateusz.kaczor.mk@gmail.com', email],
// 			subject: subject,
// 			react: (
// 				<>
// 					<h1>{subject}</h1>
// 					<p>Thank you for contacting me!</p>
// 					<p>New message submitted:</p>
// 					<p>{message}</p>
// 				</>
// 			),
// 		});

// 		if (error) {
// 			return Response.json({ error }, { status: 500 });
// 		}

// 		return Response.json({ data });
// 	} catch (error) {
// 		return Response.json({ error }, { status: 500 });
// 	}
// }

import { Ga_Maamli } from 'next/font/google';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
	const { email, subject, message } = await req.json();
	console.log(email, subject, message);
	try {
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
		return NextResponse.json({ error });
	}
}
