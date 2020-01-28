"use strict"

var Product = require('../models/product.js');


module.exports.getProducts = async function getProducts(request, callback) {
    var product = new Product();
    product.getProducts(request, function (error, products) {
        callback(error, products);
    });

}

module.exports.getProductById = async function getProductById(request, callback) {
    var product = new Product();
    product.getProductById(request, function (error, product) {
        callback(error, product);
    });
}

module.exports.save = async function save(request, callback) {
    var product = new Product();
    product.save(request, function (error, product) {
        callback(error, product);
    });
}

module.exports.update = async function update(request, callback) {
    var product = new Product();
    product.update(request, function (error, product) {
        callback(error, product);
    });
}


module.exports.remove = async function remove (request, callback) {
    var product = new Product();
    product.remove(request, function (error, product) {
        callback(error, product);
    });
}



