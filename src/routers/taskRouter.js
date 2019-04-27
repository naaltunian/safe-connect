const express = require('express');
const router = new express.Router();
const Contact = require('../models/contact');
const auth = require('../middleware/auth');

router.post('/contacts', auth, async (req, res) => {
	const contact = new Contact({
		...req.body,
		owner: req.user._id
	});

	try {
		await contact.save();
		res.status(201).send(contact);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.get('/contacts', auth, async (req, res) => {
	const match = {};
	const sort = {};
	if (req.query.completed) {
		match.completed = req.query.completed === 'true';
	}
	if (req.query.sortBy) {
		const parts = req.query.sortBy.split(':');
		sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
	}

	try {
		await req.user
			.populate({
				path: 'contacts',
				match,
				options: {
					limit: parseInt(req.query.limit),
					skip: parseInt(req.query.skip),
					sort
				}
			})
			.execPopulate();
		res.send(req.user.contacts);
	} catch (e) {
		res.status(500).send();
	}
});

router.get('/contacts/:id', auth, async (req, res) => {
	const _id = req.params.id;

	try {
		const contact = await Contact.findOne({ _id, owner: req.user._id });

		if (!contact) {
			return res.status(404).send();
		}
		res.send(contact);
	} catch (e) {
		res.status(500).send();
	}
});

router.patch('/contacts/:id', auth, async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = ['description', 'completed'];
	const isValidOperation = updates.every(update => allowedUpdates.includes(update));

	if (!isValidOperation) {
		return res.status(400).send({ error: 'Invalid updates!' });
	}

	try {
		const contact = await Contact.findOne({ _id: req.params.id, owner: req.user._id });

		if (!contact) {
			return res.status(404).send();
		}
		updates.forEach(update => (contact[update] = req.body[update]));
		await contact.save();

		res.send(contact);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.delete('/contacts/:id', auth, async (req, res) => {
	try {
		const contact = await Contact.findOneAndDelete({ _id: req.params.id, owner: req.user._id });
		if (!contact) {
			return res.status(404).send();
		}
		res.send(contact);
	} catch (e) {
		res.status(500).send();
	}
});

module.exports = router;
