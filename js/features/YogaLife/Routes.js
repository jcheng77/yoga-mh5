/**
 *
 *  Routes module expose route information used in home feature
 *
 *  @author  sherwin
 *  @date    Sep 9, 2016
 *
 */

import tpl from './partials/yogaLife.html';

export default [
    {
        id: 'yogaLife',
        isDefault: true,
        when: '/yogaLife',
        controller: 'YogaLifeController',
        controllerAs: 'yogaLife',
        template: tpl
    }
];
