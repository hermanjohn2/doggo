import React from 'react';
import { useHistory } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import store from '../../app/store';
import API from '../../utils/userAPI';

const LoginCard = props => {
	let history = useHistory();

	let email;
	let password;

	const handleLogin = () => {
		API.loginUser(email, password)
			.then(res => {
				store.dispatch({
					type: 'login/setUser',
					payload: {
						userId: res.data._id,
						firstName: res.data.firstName,
						lastName: res.data.lastName,
						dogs: res.data.dogs
					}
				});
			})
			.then(() => history.push('/home'))
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
