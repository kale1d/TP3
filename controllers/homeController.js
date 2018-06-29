let self = {}
const productServices = require('../services/productServices')
const productos = productServices.productos;
const userServices = require ('../services/userServices')

self.home = function (req,res){
  console.log(productos);
  res.render('index',
  { title: 'home',
  productos:productos});

}

self.add = function(req,res){
  if (userServices.isAuthenticated) {
    res.render('add', {title:'agregar'})
  }
  else {
    console.log('lalalala')
    res.render('auth', { title: 'Express' })
  }
}

self.auth = function (req, res){
  res.render('auth', { title: 'Express' })
}



// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// router.get('/add', function(req, res, next) {
//   res.render('add', { title: 'Express' });
// });
// router.get('/auth', function(req, res, next) {
//   res.render('auth', { title: 'Express' });
// });

module.exports = self
