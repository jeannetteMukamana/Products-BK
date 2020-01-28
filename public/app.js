var module = angular.module("ProductBuyer", [
    "ngRoute",
    "ngAnimate",
    "toaster",
    "ngMaterial"
]);

(function (app) {
    app.config(function ($routeProvider) {
        var base = "/views/";

        $routeProvider
            .when("/", {
                templateUrl: base + "Product/index.html",
                controller: "HomeController",
                controllerAs: "vm"
            })
            .when("/Product/add", {
                templateUrl: base + "Product/add.html",
                controller: "ProductAddController",
                controllerAs: "vm"
            })
            .when("/Product/details/:id", {
                templateUrl: base + "Product/details.html",
                controller: "ProductDetailsController",
                controllerAs: "vm"
            })
            .when("/Product/edit/:id", {
                templateUrl: base + "Product/edit.html",
                controller: "ProductEditController",
                controllerAs: "vm"
            })
            .when("/Product/remove/:id", {
                templateUrl: base + "Product/remove.html",
                controller: "ProductRemoveController",
                controllerAs: "vm"
            });
    });
})(angular.module("ProductBuyer"));
