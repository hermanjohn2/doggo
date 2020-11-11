import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

const App = () => {
	return (
		<Router>
			<Route exact path="/" component={Login} />
			<Route exact path="/register" component={Register} />
			<Route exact path="/home" component={Home} />
		</Router>
	);
};

export default App;
