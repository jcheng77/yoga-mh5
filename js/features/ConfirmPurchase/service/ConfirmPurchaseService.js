/**
 *  Defines the HomeService
 *
 *  @author  sherwin
 *  @date    Sep 9, 2016
 *
 */

class ConfirmPurchaseService {

    /*@ngInject*/
    constructor($http, utils) {
        this.$http = $http;
        this.utils = utils;
    }

    getInitTodos() {
        return Promise.resolve([
            {
                finished: true,
                txt: 'Learn JavaScript'
            },
            {
                txt: 'Learn AngularJS'
            },
            {
                txt: 'Learn webpack'
            },
            {
                txt: 'Learn node'
            }
        ]);
    }

}

export default ConfirmPurchaseService;
