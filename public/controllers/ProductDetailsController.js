(function (app) {
    "use strict";

    app.controller("ProductDetailsController", ProductDetailsController);

    ProductDetailsController.$inject = ["$routeParams", "$location", "ProductBuyerService"];

    function ProductDetailsController($routeParams, $location, repository) {
        var vm = this;

        var id = $routeParams.id;

        vm.model = {};

        repository.getProduct(id).then(function (result) {

            vm.model = result.data;
        });

        vm.edit = function () {
            $location.path("/Product/edit/" + id);
        };
    };
})(angular.module("ProductBuyer"));
