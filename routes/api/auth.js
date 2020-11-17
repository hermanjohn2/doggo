const router = require('express').Router(),
	authController = require('../../controllers/authController');

// ROUTE: /api/auth/login
router.route('/login').post(authController.login).get(authController.getCurrentUser);

module.exports = router;
