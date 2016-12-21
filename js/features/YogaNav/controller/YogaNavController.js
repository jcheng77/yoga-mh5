class YogaNavController {
    /*@ngInject*/
    constructor($scope, $rootScope, $sce, $http) {
        this.$rootScope = $rootScope;
        this.$scope = $scope;
        this._init_();
        this._destroy_();
    }
    _init_() {
        this.$rootScope.title = '瑜伽柠檬';
    }
    _destroy_() {
        this.$scope.$on('$destroy', function() {});
    }
}

export default YogaNavController;
