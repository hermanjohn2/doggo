import React from 'react';
import { useHistory } from 'react-router-dom';

import API from '../../utils/userAPI';
import store from '../../app/store';

const Home = () => {
	let userData = store.getState().login.user;
	let history = useHistory();

	console.log(userData);

	// Testing Passport Session can deliver current userId without having to sign in again
	API.getCurrentUser()
		.then(result => {
			console.log(result.data.userId);
		})
		.catch(err => console.log(err));

	const handleLogout = () => {
		API.logoutUser()
			.then(data => {
				if (data.status === 200) history.push('/');
				else throw new Error('Error logging out the user.');
			})
			.catch(err => console.log(err));
	};
	return (
		<div>
			<button onClick={handleLogout}>Logout</button>
			<h1>doggo</h1>
			<h2>Welcome, {userData.firstName}</h2>
		</div>
	);
};

export default Home;
