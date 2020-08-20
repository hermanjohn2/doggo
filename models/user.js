const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const UserSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	dogs: [
		{
			name: {
				type: String,
				required: true
			},
			breed: {
				type: String,
				required: true
			},
			age: {
				type: Number,
				required: false
			},
			personality: {
				type: String,
				enum: [
					'Friendly',
					'Ball Chaser',
					'Lazy',
					'Loner'
				]
			}
		}
	]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
