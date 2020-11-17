import React from 'react';
import { useHistory } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import API from '../../utils/userAPI';

const RegisterCard = props => {
	let first, last, email, pswd, pswd2;

	let history = useHistory();

	const handleRegister = () => {
		if (!first || !last || !email || !pswd || !pswd2) {
			console.log('Please fill out form!');
			return;
		}

		const verified = verifyPasswordMatch(pswd, pswd2);

		if (verified) {
			API.registerUser(first, last, email, pswd)
				.then(response => {
					if (response.status === 200) {
						console.log('Registration Successful!');
						setTimeout(loginRedirect(), 2000);
					}
				})
				.catch(err => console.log('FAIL'));
		} else console.log('Passwords do not match!');
	};

	const verifyPasswordMatch = (a, b) => {
		if (a !== b) {
			return false;
		} else {
			console.log('Passwords match!');
			return true;
		}
	};

	const loginRedirect = () => {
		// Navigates to the Login page
		history.push('/login');
	};

	return (
		<div>
			<Card>
				<CardContent>
					<TextField
						className={props.classes.input}
						label="First Name"
						variant="outlined"
						onChange={e => (first = e.target.value)}
						value={first}
					/>
					<TextField
						className={props.classes.input}
						label="Last Name"
						variant="outlined"
						onChange={e => (last = e.target.value)}
						value={last}
					/>
					<TextField
						className={props.classes.input}
						label="Email"
						variant="outlined"
						onChange={e => (email = e.target.value)}
						value={email}
					/>
					<TextField
						className={props.classes.input}
						label="Password"
						variant="outlined"
						onChange={e => (pswd = e.target.value)}
						value={pswd}
					/>
					<TextField
						className={props.classes.input}
						label="Confirm Password"
						variant="outlined"
						onChange={e => (pswd2 = e.target.value)}
						value={pswd2}
					/>
				</CardContent>
				<CardActions>
					<ButtonGroup
						className={props.classes.buttonGroup}
						size="small"
						aria-label="Login and Register button group">
						<Button onClick={handleRegister}>Register</Button>
						<Button onClick={loginRedirect}>Already a User?</Button>
					</ButtonGroup>
				</CardActions>
			</Card>
		</div>
	);
};

export default RegisterCard;
