import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		width: '100%',
		maxWidth: 600,
		minWidth: 300,
		margin: 'auto',
		marginTop: 100
	},
	title: {
		margin: 'auto',
		fontSize: 20
	},
	input: {
		width: 400,
		margin: 'auto'
	},
	buttonGroup: {
		margin: 'auto'
	}
});

const Login = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography variant="h1" gutterBottom>
				{'{d}'}oggo.
			</Typography>
			<Card>
				<CardContent className={classes.input}>
					<TextField id="outlined-basic" label="Email" variant="outlined" />
					<TextField id="outlined-basic" label="Password" variant="outlined" />
				</CardContent>
				<CardActions>
					<ButtonGroup
						className={classes.buttonGroup}
						size="small"
						aria-label="Login and Register button group">
						<Button>Login</Button>
						<Button>Register</Button>
					</ButtonGroup>
				</CardActions>
			</Card>
		</div>
	);
};

export default Login;
