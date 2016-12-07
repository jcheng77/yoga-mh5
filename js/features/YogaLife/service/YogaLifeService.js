/**
 *  Defines the HomeService
 *
 *  @author  sherwin
 *  @date    Sep 9, 2016
 *
 */
import api from 'config'
class YogaLifeService {

    /*@ngInject*/
    constructor($http, utils) {
        this.$http = $http;
        this.utils = utils;
    }

    getData() {
        const url = api.API_ROOT;
        return this.$http.get(url).then(data => data.data).then(data => {
            const news = data.filter(data => data.is_video === 0);
            const video = data.filter(data => data.is_video === 1);
            return {
                news:news,
                video:video
            }
        })

    }

}

export default YogaLifeService;
