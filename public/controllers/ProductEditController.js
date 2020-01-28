(function (app) {
    "use strict";

    app.controller("ProductEditController", ProductEditController);

    ProductEditController.$inject = ["$routeParams", "$location", "toaster", "ProductBuyerService"];

    function ProductEditController($routeParams, $location, toaster, repository) {
        var vm = this;

        var id = $routeParams.id;

        vm.model = {};

        repository.getProduct(id).then(function (result) {
            vm.model = result.data;
        });

        vm.save = function () {
            toaster.pop("wait", "Saving...");

            repository.updateProduct(id, vm.model).then(function (result) {
                toaster.pop("success", "The changes were saved successfully");

                $location.path("/Product/details/" + id);
            });
        };

        vm.cancel = function () {
            $location.path("/Product/details/" + id);
        };
    };
})(angular.module("ProductBuyer"));
