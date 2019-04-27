const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'info@leopolicastro.com',
		subject: 'Welcome!',
		text: `Welcome to SafeConnect ${name}..`
		// html: ''I can place html tags and elements inside this field
	});
};

const verifiedSafeEmail = (name, email, phone, zipcode, id) => {
	sgMail.send({
		to: email,
		from: 'safe@leopoicastro.com',
		subject: 'This is a verified lead.',
		text: `This is the data that was verified by sms text. Name: ${name}, Email: ${email}, Phone: ${phone}, Zip: ${zipcode} ID: ${id}`
	});
};

const sendCancellationEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'info@leopolicastro.com',
		subject: 'We hate to see you leave.',
		text: `Goodbye, ${name}.  Hope to see you back again.`
	});
};

module.exports = {
	sendWelcomeEmail,
	sendCancellationEmail,
	verifiedSafeEmail
};
