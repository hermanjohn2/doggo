const router = require('express').Router();
const usersController = require('../../controllers/usersController');

// ROUTE: /api/users
router.route('/').get(usersController.findAll).post(usersController.create);

// ROUTE: /api/users/:id
router.route('/:id')
	.get(usersController.findById)
	.delete(usersController.remove);

module.exports = router;
