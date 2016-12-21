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
import YogaNavController from './controller/YogaNavController';
import YogaNavService from './service/YogaNavService';

class Feature extends FeatureBase {

    constructor() {
        super('yogaNav');
        this.routes = Routes;
    }

    execute() {
        this.controller('YogaNavController', YogaNavController);
        this.service('YogaNavService', YogaNavService);
    }
}

export default Feature;
