const express = require('express'),
	path = require('path'),
	mongoose = require('mongoose'),
	routes = require('./routes'),
	config = require('./config');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(routes);

// MongoDB Connection
mongoose.connect(config.DB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
})
	.then(() => console.log('Connected to DB...'))
	.catch(err => {
		console.log('Unable to connect to DB. Exiting...', err);
		process.exit();
	});

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
	console.log(`🌎 ==> API server now on port ${PORT}`);
});
