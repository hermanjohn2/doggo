const db = require('../models');

module.exports = {
	findAll: (req, res) => {
		db.User.find(req.query)
			.then(data => res.json(data))
			.catch(err => res.status(422).json(err));
	},
	findById: (req, res) => {
		db.User.findById(req.params.id)
			.then(data => res.json(data))
			.catch(err => res.status(422).json(err));
	},
	create: (req, res) => {
		db.User.create(req.body)
			.then(data => res.json(data))
			.catch(err => res.status(422).json(err));
	},
	remove: (req, res) => {
		db.User.findByIdAndDelete(req.params.id)
			.then(data => data.remove())
			.then(response => res.json(response))
			.catch(err => res.status(422).json(err));
	}
};
