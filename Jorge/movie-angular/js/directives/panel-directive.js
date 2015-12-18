/**
 * Created by Academia on 12/17/2015.
 */
angular.module('Movies')
.directive("productPanels", function(){
    return{
        restrict: 'E',
        templateUrl: "templates/pages/partials/panels.html",
        controller: function(){
            this.tab = 1;
            this.setTab = function (setTab) {
                this.tab = setTab;
            };
            this.isSelected = function (checkTab) {
                return this.tab === checkTab;
            };

        },
        controllerAs: 'Panel'
    }
});