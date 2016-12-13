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
import LiveWorkController from './controller/LiveWorkController';
import LiveWorkService from './service/LiveWorkService';

class Feature extends FeatureBase {

    constructor() {
        super('liveWork');
        this.routes = Routes;
    }

    execute() {
        this.controller('LiveWorkController', LiveWorkController);
        this.service('LiveWorkService', LiveWorkService);
    }
}

export default Feature;
