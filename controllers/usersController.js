const db = require('../models'),
	bcrypt = require('bcrypt');

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
	},
	login: (req, res) => {
		db.User.findOne({ email: req.body.email })
			.then(data => {
				data.comparePassword(req.body.password, (err, result) => {
					if (result)
						res.json({
							_id: data._id,
							firstName: data.firstName,
							lastName: data.lastName,
							dogs: data.dogs
						});
					else res.status(422).json(err);
				});
			})
			.catch(err => {
				res.status(422).json(err);
			});
	},
	updatePassword: (req, res) => {
		const newPassword = req.body.password;
		const hashedPassword = bcrypt.hashSync(newPassword, bcrypt.genSaltSync(10), null);

		db.User.updateOne({ email: req.body.email }, { password: hashedPassword, updatedAt: Date.now() })
			.then(data => res.json(data))
			.catch(err => console.log(err));
	},
	addDog: (req, res) => {
		let userId = req.params.id;
		let newDog = {
			name: req.body.name,
			breed: req.body.breed,
			age: req.body.age,
			personality: req.body.personality
		};

		db.User.findById(userId)
			.then(data => {
				let dogs = data.dogs;
				dogs.push(newDog);

				return dogs;
			})
			.then(data => {
				console.log(data);
				db.User.updateOne({ _id: userId }, { dogs: data, updatedAt: Date.now() }).then(data =>
					res.json(data)
				);
			})
			.catch(err => console.log(err));
	}
};
