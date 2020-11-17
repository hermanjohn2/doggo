import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import API from '../../utils/userAPI';
import store from '../../app/store';

const Home = () => {
	let userData = store.getState().login.user;
	let history = useHistory();
	let userId;

	console.log(userData);

	useEffect(() => {
		verifyLoggedIn();
	});

	const verifyLoggedIn = () => {
		API.getSessionUserId()
			.then(result => {
				if (!result.data.userId) history.push('/login');

				userId = result.data.userId;
				console.log(userId);
			})
			.catch(err => console.log(err));
	};

	// const setUserData = () => {};

	const handleLogout = () => {
		API.logoutUser()
			.then(data => {
				if (data.status === 200) history.push('/login');
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
