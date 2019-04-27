const mongoose = require('mongoose');
// const validator = require('validator');

const contactSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true
		},
		description: {
			type: String,
			trim: true,
			required: true
		},
		number: {
			type: String,
			trim: true,
			required: true
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User'
		}
	},
	{
		timestamps: true
	}
);

const Contact = new mongoose.model('Contact', contactSchema);

// const task = new Task({
// 	description: 'Learn Node and Mongo   '
// });

// task
// 	.save()
// 	.then(() => {
// 		console.log(task);
// 	})
// 	.catch(error => {
// 		console.log('Error: ', error);
// 	});

module.exports = Contact;
