import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './features/Dashboard';

const App = () => {
	return (
		<Router>
			<Route exact path="/" component={Dashboard} />
			<Route exact path="/register" component={Register} />
			<Route exact path="/login" component={Login} />
		</Router>
	);
};

export default App;
