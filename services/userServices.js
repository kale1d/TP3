let self = {};

const user = {
  username: 'admin',
  password: 'pass',
}

self.isAuthenticated = false;

self.updateAuth = function (status) {
  self.isAuthenticated = status;
}

self.authenticate = function (data){
  console.log(data,'serv')
  if (data.user == user.username &&
    data.password == user.password){
    return true;
  }else {
    console.log('pepe')
    return false;
  }
}

module.exports = self
