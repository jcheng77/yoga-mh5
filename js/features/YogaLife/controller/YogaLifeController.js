class YogaLifeController {
    /*@ngInject*/
    constructor($scope, $rootScope, $sce, $http, YogaLifeService) {
        this.$rootScope = $rootScope;
        this.$scope = $scope;
        this.$http = $http;
        this.$sce = $sce;
        this.YogaLifeService = YogaLifeService;
        this._init_();
        this._destroy_();
    }
    _init_() {
        this.$rootScope.title = '瑜伽生活';
        this.tab = 0; //0:资讯 1:视频;
        this.YogaLifeService.getData().then(data => {
            "use strict";
            this.news = data.news;
            this.video = data.video;
        })
    }
    showTab(a) {
        this.tab = a;
    }
    _destroy_() {
        this.$scope.$on('$destroy', function() {});
    }
}

export default YogaLifeController;
