/**
 *  Defines the HomeService
 *
 *  @author  sherwin
 *  @date    Sep 9, 2016
 *
 */
import api from 'config'

class LiveWorkService {

    /*@ngInject*/
    constructor($http, utils) {
        this.$http = $http;
        this.utils = utils;
    }

    getData() {
        const url = api.API_LIVE_WORK;
        console.log(url)
        return this.$http.get(url).then(data => data.data).then(data => {
            console.log(data)
        })

    }

}

export default LiveWorkService;
