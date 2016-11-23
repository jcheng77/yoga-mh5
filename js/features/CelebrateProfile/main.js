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
import CelebrateProfileController from './controller/CelebrateProfileController';
import CelebrateProfileService from './service/CelebrateProfileService';

class Feature extends FeatureBase {

    constructor() {
        super('celebrateProfile');
        this.routes = Routes;
    }

    execute() {
        this.controller('CelebrateProfileController', CelebrateProfileController);
        this.service('CelebrateProfileService', CelebrateProfileService);
    }
}

export default Feature;
