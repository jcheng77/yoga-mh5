/**
 *
 *  Routes module expose route information used in home feature
 *
 *  @author  sherwin
 *  @date    Sep 9, 2016
 *
 */

import tpl from './partials/confirmPurchase.html';

export default [
    {
        id: 'confirmPurchase',
        isDefault: true,
        when: '/confirmPurchase',
        controller: 'ConfirmPurchaseController',
        controllerAs: 'confirmPurchase',
        template: tpl
    }
];
