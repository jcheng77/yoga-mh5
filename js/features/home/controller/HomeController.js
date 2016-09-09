/**
 *  Defines the HomeController controller
 *
 *  @author  sherwin
 *  @date    Sep 9, 2016
 *
 */

class HomeController {

    /*@ngInject*/
    constructor($scope) {
        this.$scope = $scope;

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
