import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Jumbotron from '../Jumbotron';

import API from '../../utils/userAPI';
import store from '../../app/store';

const Dashboard = () => {
	let history = useHistory();

	useEffect(() => {
		verifyLoggedIn();
	});

	const verifyLoggedIn = () => {
		API.getSessionUserId()
			.then(result => {
				// If the user does not have a current session...
				if (!result.data.userId) history.push('/login');
				else setUserData(result.data.userId);
			})
			.catch(err => console.log(err));
	};

	const setUserData = id => {
		API.getUser(id)
			.then(response => {
				store.dispatch({
					type: 'login/setUser',
					payload: response.data
				});
			})
			.then(() => console.log(store.getState().login.user))
			.catch(err => console.log(err));
	};

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
			<Jumbotron />
		</div>
	);
};

export default Dashboard;
