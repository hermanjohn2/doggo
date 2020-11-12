import React from 'react';
import { useHistory } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import store from '../../app/store';
// import API from '../../utils/userAPI';

const LoginCard = props => {
	let history = useHistory();

	const handleLogin = () => {
		console.log('Attempting to log in...');
		console.log('Initial State:');
		console.log(store.getState());

		store.dispatch({ type: 'login/setId', payload: 'fakeUserId1' });

		console.log('Altered State:');
		console.log(store.getState());

		let userPets = ['jimmy', 'joe'];

		store.dispatch({
			type: 'login/setUser',
			payload: { firstName: 'Test', lastName: 'This', email: 'fakeemail@email.com', dogs: userPets }
		});

		console.log('Altered state again:');
		console.log(store.getState());
	};

	const registerRedirect = () => {
		// Navigates to the Register page
		history.push('/register');
	};

	return (
		<div>
			<Card>
				<CardContent>
					<TextField className={props.classes.input} label="Email" variant="outlined" />
					<TextField
						className={props.classes.input}
						label="Password"
						variant="outlined"
					/>
				</CardContent>
				<CardActions>
					<ButtonGroup
						className={props.classes.buttonGroup}
						size="small"
						aria-label="Login and Register button group">
						<Button onClick={handleLogin}>Login</Button>
						<Button onClick={registerRedirect}>Register</Button>
					</ButtonGroup>
				</CardActions>
			</Card>
		</div>
	);
};

export default LoginCard;
