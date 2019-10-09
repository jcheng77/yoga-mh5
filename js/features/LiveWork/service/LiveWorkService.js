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

    getData(tag, type, index) {
        const url = api.API_LIVE_WORK;
        if(index){
            return this.$http.get(`${url}?tag=${tag}&state=${type}&page=${index}`).then(data => data.data).then(data => {
                return data;
            });
        }
        else{
            return this.$http.get(`${url}?tag=${tag}&state=${type}`).then(data => data.data).then(data => {
                return data;
            });
        }
    }
    getBanner() {
        const url = api.API_LIVE_WORK;
        return this.$http.get(`${url}?type=0`).then(data => data.data).then(data => {
            const swiper = data.filter(data => data.type === 0);
            return {
                swiper:swiper
            }
        });
    }

}

export default LiveWorkService;
