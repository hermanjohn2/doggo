import React from 'react';

import store from '../../app/store';

const Home = () => {
	let userData = store.getState().login.user;
	console.log(userData);
	return (
		<div>
			<h1>doggo</h1>
			<h2>Welcome, {userData.firstName}</h2>
		</div>
	);
};

export default Home;
