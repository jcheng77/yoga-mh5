class ArticlesNewFirstController {
    /*@ngInject*/
    constructor($scope, $rootScope, $sce, $http) {
        this.$rootScope = $rootScope;
        this.$scope = $scope;
        this.$http = $http;
        this.$sce = $sce;
        this._init_();
        this._destroy_();
    }
    _init_() {
        this.$rootScope.title = '瑜伽生活';
    }
    _destroy_() {
        this.$scope.$on('$destroy', function() {});
    }
}

export default ArticlesNewFirstController;
