const router = require('express').Router();
const usersController = require('../../controllers/usersController');

// ROUTE: /api/users
router.route('/').get(usersController.findAll);

// ROUTE: /api/users/:id
router.route('/:id').get(usersController.findById).delete(usersController.remove);

// ROUTE: /api/users/register
router.route('/register').post(usersController.create);

// ROUTE: /api/users/update-password
router.route('/update-password').put(usersController.updatePassword);

// ROUTE: /api/users/add-dog/:id
router.route('/add-dog/:id').put(usersController.addDog);

module.exports = router;
