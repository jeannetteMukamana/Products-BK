function api(app) {
    var mongojs = require("mongojs");

    var db = mongojs("ProductBuyer", ["Products"]);

    var ProductController = require('./controllers/product.js');

    /**
     * Getting the list of latest products
     * @param {JSON} req
     * @param {JSON} res
     * @return{json(array)} chats
     * 500: unexpected condition has occured on server side
     * 200: chats has beeen retreived successfully
     * 400: client side error  ie. one or more parameters missing
     */
    app.get("/api/Product", function (request, response) {
        if (request == null || request == undefined) {
            response.status(400);
        }
        else {
            ProductController.getProducts(request, function (error, products) {
                if (error)
                    response.status(500);
                response.status(200).json(products);
            })
        }

    });



    /**
     * Getting details of user selected product
     * @param {JSON} req
     * @param {JSON} res
     * @return{json(array)} chats
     * 500: unexpected condition has occured on server side
     * 200: chats has beeen retreived successfully
     * 400: client side error  ie. one or more parameters missing
     */

    app.get("/api/Product/:id", function (request, response) {
        if (request == null || request == undefined || request.params.id == null || request.params.id == undefined) {
            response.status(400);
        }
        else {
            ProductController.getProductById(request, function (error, product) {
                if (error)
                    response.status(500);
                response.status(200).json(product);
            })
        }
    });


    /**
         * Saving a product
         * @param {JSON} req
         * @param {JSON} res
         * @return{json(array)} chats
         * 500: unexpected condition has occured on server side
         * 200: chats has beeen retreived successfully
         * 400: client side error  ie. one or more parameters missing
         */

    app.post("/api/Product", function (request, response) {
        if (request == null || request == undefined) {
            response.status(400);
        }
        else {
            ProductController.save(request, function (error, product) {
                if (error)
                    response.status(500);
                response.status(200).json(product);
            })
        }

    });

    /**
     * Updating a product
     * @param {JSON} req
     * @param {JSON} res
     * @return{json(array)} chats
     * 500: unexpected condition has occured on server side
     * 200: chats has beeen retreived successfully
     * 400: client side error  ie. one or more parameters missing
     */

    app.put("/api/Product/:id", function (request, response) {
        if (request == null || request == undefined || request.params.id == null || request.params.id == undefined) {
            response.status(400);
        }
        else {
            ProductController.update(request, function (error, product) {
                if (error)
                    response.status(500);
                response.status(200).json(product);
            })
        }
    });
    
    /**
     * Deleting  a product
     * @param {JSON} req
     * @param {JSON} res
     * @return{json(array)} chats
     * 500: unexpected condition has occured on server side
     * 200: chats has beeen retreived successfully
     * 400: client side error  ie. one or more parameters missing
     */
    app.delete("/api/Product/:id", function (request, response) {
        if (request == null || request == undefined || request.params.id == null || request.params.id == undefined) {
            response.status(400);
        }
        else {
            ProductController.remove(request, function (error, product) {
                if (error)
                    response.status(500);
                response.status(200).json(product);
            })
        }
        
    });
    
};



module.exports = api;
