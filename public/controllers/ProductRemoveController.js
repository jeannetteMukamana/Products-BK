(function (app) {
    "use strict";

    app.controller("ProductRemoveController", ProductRemoveController);

    ProductRemoveController.$inject = ["$location", "$routeParams", "toaster", "ProductBuyerService"];

    function ProductRemoveController($location, $routeParams, toaster, repository) {
        var vm = this;

        var id = $routeParams.id;

        vm.model = {};

        repository.getProduct(id).then(function (result) {
            vm.model = result.data;
        });

        vm.remove = function () {
            toaster.pop("wait", "Removing...");

            repository.deleteProduct(id).then(function (result) {
                toaster.pop("success", "The Product was removed successfully");

                $location.path("/");
            });
        };

        vm.cancel = function () {
            $location.path("/");
        };
    };
})(angular.module("ProductBuyer"));
