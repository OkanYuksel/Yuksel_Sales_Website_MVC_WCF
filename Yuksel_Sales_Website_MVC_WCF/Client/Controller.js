﻿(function (app) {
    app.controller("modelController", function ($scope, PageService) {
        $scope.pageno = 1;
        $scope.count = 10;
        $scope.productList = [];
        $scope.pagesize = 8;
        $scope.getData = function (pageno) {

            PageService.ProductPaging(pageno, $scope.pagesize).then(function (result) {
                console.log(result);

                $scope.pageno = pageno;
                $scope.count = result.Total;
                $scope.productList = result.PageListModel;
            });


            //PageService.CategoryPaging(pageno, $scope.pagesize).then(function (result) {
            //    console.log(result);

            //    $scope.pageno = pageno;
            //    $scope.count = result.Total;
            //    $scope.productList = result.PageListModel;
            //});
        };

        $scope.getData(1);
    })
}(angular.module("myApp")))