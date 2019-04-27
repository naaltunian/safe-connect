const mongoose = require('mongoose');
const validator = require('validator');

const contactSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			trim: true
		},
		lastName: {
			type: String,
			required: true,
			trim: true
		},
		email: {
			type: String,
			unique: true,
			required: true,
			trim: true,
			lowercase: true,
			validate(value) {
				if (!validator.isEmail(value)) {
					throw new Error('Email is invalid');
				}
			}
		},
		phone: {
			type: String,
			required: true,
			minlength: 10,
			trim: true
		},
		location: {
			type: String,
			required: false,
			trim: true,
			lowercase: true
		},
		safe: {
			type: Boolean,
			default: undefined
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
