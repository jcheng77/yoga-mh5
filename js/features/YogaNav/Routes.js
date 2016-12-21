/**
 *
 *  Routes module expose route information used in home feature
 *
 *  @author  sherwin
 *  @date    Sep 9, 2016
 *
 */

import tpl from './partials/yogaNav.html';

export default [
    {
        id: 'yogaNav',
        isDefault: false,
        when: '/yogaNav',
        controller: 'YogaNavController',
        controllerAs: 'yogaNav',
        template: tpl
    }
];
