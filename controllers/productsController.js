const productsDB = require('../data/productsDB');

module.exports = {
    detail: (req, res) => {
        let product = productsDB.find(producto => producto.id == Number(req.params.id && producto.category == req.params.category));

        res.send(product);
    }
}