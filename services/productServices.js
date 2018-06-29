let self = {};

self.productos= []

self.product = function(data) {
  const newProd = {
    title: data.title,
    img: data.img,
    precio: data.precio,
  }
  self.productos.push(newProd);
  return self.productos;
}




module.exports = self
