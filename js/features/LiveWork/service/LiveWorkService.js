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
        return this.$http.get(url).then(data => data.data).then(data => {
            const swiper = data.filter(data => data.type === 0);
            const wait = data.filter(data => data.state === 0);
            const live = data.filter(data => data.state === 1);
            const over = data.filter(data => data.state === 2);
            return {
                swiper:swiper,
                wait:wait,
                live:live,
                over:over
            }
        });
    }

}

export default LiveWorkService;
