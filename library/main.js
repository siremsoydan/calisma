var myapp=angular.module("myapp",[])
    myapp.controller("mycontrol", function($scope){
    $scope.deger="19";
    $scope.eylem=function(){
        alert("Sıcaklık 19 :)")
    }
});
 var app = angular.module("demoapp", ["leaflet-directive"]);
        app.controller("BasicBoundsController", [ "$scope", "leafletData", "leafletBoundsHelpers", function($scope, leafletData, leafletBoundsHelpers) {

            var bounds = leafletBoundsHelpers.createBoundsFromArray([
                [ 51.508742458803326, -0.087890625 ],
                [ 51.508742458803326, -0.087890625 ]
            ]);

            angular.extend($scope, {
                bounds: bounds,
                center: {}
            });

        }]);
    