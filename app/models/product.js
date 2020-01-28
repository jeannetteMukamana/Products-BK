"use strict"
var _this = this;


var Promise = require('es6-promise').Promise

var mongojs = require("mongojs");

var db = mongojs("Warehouse", ["Products"]);

class Product {

    /*
           Class constructor: to initialize all user attribute for each crated on object

    */
    constructor(brandName, model, sizeAvalability, price, picture, manufactureDate) {
        this.brandName = brandName;
        this.model = model;
        this.size= {size: 37, quantity: 20}
        this.price = price;
        this.picture = picture;
        this.manufactureDate = manufactureDate;
    }


    getBrandName() {
        return this.brandName
    }


    getModel() {
        return this.model
    }

    getSizeAvalability() {
        return this.size
    }

    getPrice() {
        return this.price
    }


    getPicture() {
        return this.picture
    }

    getManufactureDate() {
        return this.manufactureDate
    }


    toString() {
        return `${this.brandName}, ${this.model},  ${this.size},  ${this.price},  ${this.picture}, ${this.manufactureDate}`;
    }



    getProducts(request, callback) {
        var MaxNumber = request.query.MaxNumber ? parseInt(request.query.MaxNumber) : 10;
        var brandName = request.query.brandName;
        var model = request.query.model;
        var price = request.query.price;
        var model = request.query.model;
        var size = request.query.size;

        var find = {};

        if (brandName) {
            find.brandName = new RegExp(brandName, "i");
        }

        if (model) {
            find.model = new RegExp(model, "i");
        }

        if (price) {
            find.price = new RegExp(price, "i");
        }

        if (size) {
            find.size = new RegExp(size, "i");
        }

        var fields = {
            brandName: 1,
            model: 1,
            price: 1,
            size: 1,
            manufactureDate: 1
        };
        var result = db.Products.find(find, fields).limit(MaxNumber, function (err, products) {
            if (err)
                callback(err, null)
            callback(null, products)

        });

    }


    getProductById(request, callback) {
        var id = request.params.id;
        db.Products.findOne({ _id: mongojs.ObjectId(id) }, function (err, product) {
            if (err)
                callback(err, null)
            callback(null, product)
        });
    }

    save(product, callback) {
        product.body.size = {size: 37, quantity: 20} 
        db.Products.insert(product.body, function (err, product) {
            if (err)
                callback(err, null)
            callback(null, product)
        });
    }

    update(request, callback) {
        var id = request.params.id;
        db.Products.findAndModify({
            query: {
                _id: mongojs.ObjectId(id)
            },
            update: {
                $set: {
                    brandName: request.body.brandName,
                    model: request.body.model,
                    price: request.body.price,
                    manufactureDate: request.body.manufactureDate
                }
            },
            new: true
        }, function (err, product) {
            if (err)
                callback(err, null)
            callback(null, product)

        });

    }

    remove (request, callbac){
        var id = request.params.id;
        db.Products.remove({ _id: mongojs.ObjectId(id) }, function (err, product) {
            if (err)
            callbac(err, null)
         callbac(null, product)

        });
    }

}

module.exports = Product