import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from './loginSlice';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import API from '../../utils/userAPI';

const LoginCard = props => {
	const dispatch = useDispatch();
	const history = useHistory();

	// Setting as variables so user input is not stored in state or storage
	// Hoping this enables more security
	let email;
	let password;

	const handleLogin = () => {
		API.loginUser(email, password)
			.then(res => {
				dispatch(
					setUser({
						id: res.data._id,
						firstName: res.data.firstName,
						lastName: res.data.lastName,
						dogs: res.data.dogs
					})
				);
			})
			.then(() => {
				history.push('/');
			})
			.catch(err => console.log(err));
	};

	const registerRedirect = () => {
		// Navigates to the Register page
		history.push('/register');
	};

	return (
		<div>
			<Card>
				<CardContent>
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
						onChange={e => (password = e.target.value)}
						value={password}
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
