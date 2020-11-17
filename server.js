const express = require('express'),
	session = require('express-session'),
	MongoStore = require('connect-mongo')(session),
	path = require('path'),
	mongoose = require('mongoose'),
	routes = require('./routes'),
	dbConfig = require('./config/dbConfig'),
	passport = require('./config/passportConfig');

const PORT = process.env.PORT || 3001;

const app = express();

// MongoDB Connection
mongoose.connect(dbConfig.DB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
})
	.then(() => console.log('Connected to DB...'))
	.catch(err => {
		console.log('Unable to connect to DB. Exiting...', err);
		process.exit();
	});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Express session
app.use(
	session({
		secret: 'the powerful pup',
		resave: false,
		saveUninitialized: true,
		store: new MongoStore({ mongooseConnection: mongoose.connection })
	})
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(routes);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
	console.log(`🌎 ==> API server now on port ${PORT}`);
});
