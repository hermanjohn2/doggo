import React from 'react';
import { useHistory } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const RegisterCard = props => {
	let history = useHistory();

	const handleRegister = () => {
		console.log('Attempting to register new user...');
	};

	const loginRedirect = () => {
		// Navigates to the Login page
		history.push('/');
	};

	return (
		<div>
			<Card>
				<CardContent>
					<TextField
						className={props.classes.input}
						label="First Name"
						variant="outlined"
					/>
					<TextField
						className={props.classes.input}
						label="Last Name"
						variant="outlined"
					/>
					<TextField className={props.classes.input} label="Email" variant="outlined" />
					<TextField
						className={props.classes.input}
						label="Password"
						variant="outlined"
					/>
					<TextField
						className={props.classes.input}
						label="Confirm Password"
						variant="outlined"
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
