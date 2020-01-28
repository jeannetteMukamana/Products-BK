(function (app) {
    "use strict";

    app.controller("HomeController", HomeController);

    HomeController.$inject = ["$location", "toaster", "ProductBuyerService"];

    function HomeController($location, toaster, repository) {
        var vm = this;

        vm.Products = [];

        vm.search = {};

        toaster.pop("wait", "Loading products...");

        repository.getProducts(vm.search).then(function (result) {
            vm.Products = result.data;
        });

        vm.add = function () {
            $location.path("/Product/add/");
        };

        vm.search = function () {
            repository.getProducts(vm.search).then(function (result) {
                vm.Products = result.data;
            });
        };
        
        vm.details = function (id) {
            $location.path("/Product/details/" + id);
        };

        vm.remove = function (id) {
            $location.path("/Product/remove/" + id);
        };
    };
})(angular.module("ProductBuyer"));
