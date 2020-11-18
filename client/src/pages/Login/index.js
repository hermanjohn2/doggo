import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import LoginCard from '../../features/LoginCard';

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
		width: 500,
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

			<LoginCard classes={classes} />
		</div>
	);
};

export default Login;
