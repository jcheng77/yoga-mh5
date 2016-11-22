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
import ConfirmPurchaseController from './controller/ConfirmPurchaseController';
import ConfirmPurchaseService from './service/ConfirmPurchaseService';

class Feature extends FeatureBase {

    constructor() {
        super('confirmPurchase');
        this.routes = Routes;
    }

    execute() {
        this.controller('ConfirmPurchaseController', ConfirmPurchaseController);
        this.service('ConfirmPurchaseService', ConfirmPurchaseService);
    }
}

export default Feature;
