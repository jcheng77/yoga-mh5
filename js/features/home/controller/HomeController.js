/**
 *  Defines the HomeController controller
 *
 *  @author  sherwin
 *  @date    Sep 9, 2016
 *
 */

class HomeController {
    /*@ngInject*/
    constructor($scope,$sce,$http) {
        this.$scope = $scope;
        this.$http = $http;
        this.$sce = $sce;
        this._init_();
        this._destroy_();
    }
    _init_() {
        this.media = this.$sce.trustAsResourceUrl("http://v.boluo.me/chuji1-new.m3u8");
        this.avatar = this.$sce.trustAsResourceUrl("http://7xssj6.com2.z0.glb.qiniucdn.com/685F3F9D-EB54-4961-A36B-F46192FF158B.jpg");
        this.name = "Jackie Cheng 肥仔";
        this.id = "56d46748cc6422688c000285";
        this.poster = this.$sce.trustAsResourceUrl("http://7xssj6.com2.z0.glb.qiniucdn.com/685F3F9D-EB54-4961-A36B-F46192FF158B.jpg");
        /*this.$http.get('http://120.25.159.36/channels/57cfb5ece4c32932584886bf.json')
        .success(function(res){
            this.avatar = res.host_avatar;
            this.name = res.host_name;
            this.id = res.host_id;
            this.media = this.$sce.trustAsResourceUrl(res.pull_url);
          });*/
    }
    _destroy_() {
        this.$scope.$on('$destroy', function() {});
    }
}

export default HomeController;
