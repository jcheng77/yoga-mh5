/**
 *  Defines the HomeService
 *
 *  @author  sherwin
 *  @date    Sep 9, 2016
 *
 */

class CelebrateProfileService {

    /*@ngInject*/
    constructor($http, utils) {
        this.$http = $http;
        this.utils = utils;
    }

    getInitTodos() {
    }

}

export default CelebrateProfileService;
