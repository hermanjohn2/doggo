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
	getSessionUserId: (req, res) => {
		if (!req.session.passport) {
			res.status(200).json({ status: 'No current sessions.' });
		} else res.status(200).json({ userId: req.session.passport.user });
	},
	logout: (req, res) => {
		req.logout();

		return res.status(200).json({ status: 'User logged out.' });
	}
};
