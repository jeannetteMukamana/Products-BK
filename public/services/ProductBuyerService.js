(function (app) {
    "use strict";

    app.service("ProductBuyerService", ProductBuyerService);

    ProductBuyerService.$inject = ["$log", "$http"];

    function ProductBuyerService($log, $http) {
        var svc = this;

       var apiUrl = "/api/";

        svc.getProducts = function (fields) {
            var queryString = [];

            if (fields.MaxNumber) {
                queryString.push("MaxNumber=" + fields.MaxNumber);
            }

            if (fields.brandName) {
                queryString.push("brandName=" + fields.brandName);
            }

            if (fields.model) {
                queryString.push("model=" + fields.model);
            }

            if (fields.price) {
                queryString.push("price=" + fields.price);
            }

            var url = apiUrl + "Product";

            var fullUrl = queryString.length == 0 ? url : [url, "?", queryString.join("&")].join("");

            return $http.get(fullUrl);
        };

        svc.getProduct = function (id) {
            return $http.get("/api/Product/" + id);
        };

        svc.createProduct = function (model) {
            return $http.post("/api/Product", model);
        };

        svc.updateProduct = function (id, model) {
            return $http.put("/api/Product/" + id, model);
        };

        svc.deleteProduct = function (id) {
            return $http.delete("/api/Product/" + id);
        };
    };
})(angular.module("ProductBuyer"));
