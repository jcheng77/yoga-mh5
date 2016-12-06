/**
 * ******************************************************************************************************
 *
 *   Defines a home feature
 *
 *  @author  sherwin
 *  @date    Sep 9, 2016
 *
 * ******************************************************************************************************
 */

import FeatureBase from 'lib/FeatureBase';
import Routes from './Routes';
import ArticlesNewFirstController from './controller/ArticlesNewFirstController';
import ArticlesNewFirstService from './service/ArticlesNewFirstService';

class Feature extends FeatureBase {

    constructor() {
        super('articlesNewFirst');
        this.routes = Routes;
    }

    execute() {
        this.controller('ArticlesNewFirstController', ArticlesNewFirstController);
        this.service('ArticlesNewFirstService', ArticlesNewFirstService);
    }
}

export default Feature;
