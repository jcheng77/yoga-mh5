class LiveWorkController {
    /*@ngInject*/
    constructor($scope, $rootScope, $sce, $http, LiveWorkService, $location) {
        this.$rootScope = $rootScope;
        this.$scope = $scope;
        this.$http = $http;
        this.$sce = $sce;
        this.LiveWorkService = LiveWorkService;
        this.$location = $location;
        this._init_();
        this._destroy_();
    }
    _init_() {
        this.$rootScope.title = '柠檬直播';
        this.ref = this.$location.search()['ref'];
        this.infoNav = [
            '热门',
            '体式',
            '理疗',
            '流派',
            '零基础',
            '体验课',
            '工作坊',
            '专题课'
        ];
        this.tag = '热门';
        this.getWork('');
    }
    getWork(tag){
        this.tag = tag;
        this.LiveWorkService.getData(encodeURIComponent(tag)).then(data => {
            this.liveWorksWait = data.wait;
            this.liveWorksLive = data.live;
            this.liveWorksOver = data.over;
        }).then(() => {
            if(!this.liveWorksSwiper){
                this.LiveWorkService.getBanner().then(data => {
                    this.liveWorksSwiper = data.swiper;
                })
            } else {
                return
            }
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
