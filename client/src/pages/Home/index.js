import React from 'react';

import API from '../../utils/userAPI';
import store from '../../app/store';

const Home = () => {
	let userData = store.getState().login.user;
	console.log(userData);

	// Testing Passport Session can deliver current userId without having to sign in again
	API.getCurrentUser()
		.then(result => {
			console.log(result.data.userId);
		})
		.catch(err => console.log(err));
	return (
		<div>
			<h1>doggo</h1>
			<h2>Welcome, {userData.firstName}</h2>
		</div>
	);
};

export default Home;
