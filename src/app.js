const path = require('path');
const express = require('express');
const http = require('http');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');
require('./db/mongoose');
const userRouter = require('./routers/userRouter');
const userTask = require('./routers/taskRouter');
const User = require('./models/user');
const { verifiedUserEmail } = require('./emails/account.js');

const app = express();
const VoiceResponse = require('twilio').twiml.VoiceResponse;
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/voice', (request, res) => {
	// Use the Twilio Node.js SDK to build an XML response

	const twiml = new VoiceResponse();
	twiml.say({ voice: 'alice' }, 'Hello, press 1 to confirm, and 9 to opt out.');
	// console.log(request.body);
	let parsedPhone = request.body.From.slice(2, 12);
	console.log(parsedPhone);
	twiml.gather();

	const response = new VoiceResponse();
	response.gather();

	console.log(response.toString());

	f();
	async function f() {
		let userInput = await request.body.Digits;

		if (userInput !== null && userInput == '1') {
			User.findOneAndUpdate(
				{ phone: parsedPhone },
				{ $set: { verified: true } },
				(error, doc) => {
					console.log(doc);
					console.log('User verified.');
					verifiedUserEmail(
						doc.name,
						doc.email,
						doc.phone,
						doc.zipcode,
						doc._id
					);
				}
			);
		} else if (userInput == '9') {
			console.log('Goodbye');
		} else {
			console.log('I said one or fucking two dumbass');
		}
	}

	// Render the response as XML in reply to the webhook request
	res.type('text/xml');
	res.send(twiml.toString());
	// Response
});

// Route for text verification
app.post('/sms', (req, res) => {
	const twiml = new MessagingResponse();
	let lowerCaseResponse = req.body.Body.toLowerCase().trim();

	let parsedPhone = req.body.From.slice(2, 12);
	// console.log(parsedPhone)
	console.log(req.body);
	if (lowerCaseResponse.includes('yes')) {
		twiml.message('Thank you for confirming..');

		User.findOneAndUpdate(
			{ phone: parsedPhone },
			{ $set: { safe: true } },
			(error, doc) => {
				console.log(doc);
				console.log('User verified.');
				// verifiedUserEmail(doc.name, doc.email, doc.phone, doc.zipcode, doc._id);
			}
		);
	} else if (lowerCaseResponse.includes('no')) {
		twiml.message(
			'Sorry for the inconvenience, please reach out again if you change your mind.'
		);
	} else {
		twiml.message('Say if you are safe or not please.');
	}

	res.writeHead(200, { 'Content-Type': 'text/xml' });
	res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
	console.log('Express server listening on port 1337');
});

const publicDirectoryPath = path.join(__dirname, '../client/');
app.use(express.static(publicDirectoryPath));

app.use(express.json());
//import routes from routers folder
app.use(userRouter);
app.use(userTask);

module.exports = app;
