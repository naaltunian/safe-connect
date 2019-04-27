var client = twilio(config.accountSid, config.authToken);
app.post('/call', function(request, response) {
	var salesNumber = request.body.salesNumber;
	var url = 'http://demo.twilio.com/docs/voice.xml';

	var options = {
		to: request.body.phoneNumber,
		from: config.twilioNumber,
		url: url
	};

	client.calls
		.create(options)
		.then(message => {
			console.log(message.responseText);
			response.send({
				message: 'Thank you! We will be calling you shortly.'
			});
		})
		.catch(error => {
			console.log(error);
			response.status(500).send(error);
		});
});
