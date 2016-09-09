/**
 *  Defines the HomeController controller
 *
 *  @author  sherwin
 *  @date    Sep 9, 2016
 *
 */

class HomeController {

    /*@ngInject*/
    constructor($scope,$sce) {
        this.$scope = $scope;
        this.aaa = 1;
        this.config = {
            preload: "none",
            sources: [
                {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
                {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
                {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
            ],
            theme: {
                url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
            },
            plugins: {
                controls: {
                    autoHide: true,
                    autoHideTime: 5000
                }
            }
        };
        this._init_();
        this._destroy_();
    }
    _init_() {

    }
    _destroy_() {
        this.$scope.$on('$destroy', function() {});
    }
}

export default HomeController;
