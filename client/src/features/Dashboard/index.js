import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser, setUser } from '../LoginCard/loginSlice';
import { useDispatch } from 'react-redux';

import Jumbotron from '../Jumbotron';

import API from '../../utils/userAPI';

const Dashboard = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const history = useHistory();

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
				dispatch(
					setUser({
						id: response.data.id,
						firstName: response.data.firstName,
						lastName: response.data.lastName,
						dogs: response.data.dogs
					})
				);
			})
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
			<h2>{user.loggedIn.firstName}</h2>
		</div>
	);
};

export default Dashboard;
