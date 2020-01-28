(function (app) {
    "use strict";

    app.controller("ProductAddController", ProductAddController);

    ProductAddController.$inject = ["$location", "toaster", "ProductBuyerService"];

    function ProductAddController($location, toaster, repository) {
        var vm = this;

        vm.model = {};

        vm.save = function () {
            toaster.pop("wait", "Saving...");

            repository.createProduct(vm.model).then(function (result) {
                toaster.pop("success", "The Product was saved successfully");

                $location.path("/");
            });
        };

        vm.cancel = function () {
            $location.path("/");
        };
    };
})(angular.module("ProductBuyer"));
