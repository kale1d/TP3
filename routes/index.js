var express = require('express');
var router = express.Router();
const addController = require('../controllers/addController');
const homeController = require('../controllers/homeController');

/* GET home page. */
router.get('/', homeController.home);
// router.get('/add', function(req, res, next) {
//   res.render('add', { title: 'Express' });
// });
router.get('/auth', homeController.auth);

router.post('/authenticate', addController.authenticate)

router.get('/add', homeController.add)

router.post('/producto', addController.producto)

router.put('/logout', addController.logout)

module.exports = router;
