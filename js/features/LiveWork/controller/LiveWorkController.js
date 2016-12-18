class LiveWorkController {
    /*@ngInject*/
    constructor($scope, $rootScope, $sce, $http, LiveWorkService) {
        this.$rootScope = $rootScope;
        this.$scope = $scope;
        this.$http = $http;
        this.$sce = $sce;
        this.LiveWorkService = LiveWorkService;
        this._init_();
        this._destroy_();
    }
    _init_() {
        this.$rootScope.title = '柠檬直播';
        this.tab = 0; //0:资讯 1:视频;
        this.LiveWorkService.getData().then(data => {
            this.liveWorksSwiper = data.swiper;
            this.liveWorksWait = data.wait;
            this.liveWorksLive = data.live;
            this.liveWorksOver = data.over;
        })
    }
    showTab(a) {
        this.tab = a;
    }
    _destroy_() {
        this.$scope.$on('$destroy', function() {});
    }
}

export default LiveWorkController;
