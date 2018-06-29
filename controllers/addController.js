let self = {};
const prod = require('../services/productServices');
const user = require('../services/userServices')


self.authenticate = function (req, res) {
  const body = req.body;
  if (body.user &&body.password) {
    let data = user.authenticate(body);
    if (data == true) {
      user.updateAuth (true);
      res.sendStatus(302);
    }
    else {
      return res.sendStatus(404)
    };
  }
}
self.logout = function (req,res) {
  user.updateAuth (false);
  console.log('pepepepe')
  return res.sendStatus(200);
}

self.producto = function (req, res) {
  const body = req.body;
  console.log(body);
    let data = prod.product(body);
    res.json({});
}

module.exports = self;
