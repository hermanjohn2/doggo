import axios from 'axios';

export default {
	registerUser: (firstName, lastName, email, password) => {
		return axios.post('/api/users/register', {
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password
		});
	},
	loginUser: (email, password) => {
		return axios.post('/api/users/login', {
			email: email,
			password: password
		});
	}
};
