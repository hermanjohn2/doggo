const passport = require('passport');

module.exports = {
	login: (req, res, next) => {
		passport.authenticate('local', function (err, user, info) {
			if (err) res.status(400).json({ errors: err });

			if (!user) res.status(400).json({ errors: err });

			req.logIn(user, function (err) {
				if (err) res.status(400).json({ errors: err });

				return res.status(200).json(user);
			});
		})(req, res, next);
	},
	getCurrentUser: (req, res) => {
		if (!req.session) res.status(400).json({ errors: 'Error With Getting Current User' });

		return res.status(200).json({ userId: req.session.passport.user });
	}
};
