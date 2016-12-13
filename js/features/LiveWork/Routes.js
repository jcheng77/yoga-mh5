/**
 *
 *  Routes module expose route information used in home feature
 *
 *  @author  sherwin
 *  @date    Sep 9, 2016
 *
 */

import tpl from './partials/liveWork.html';

export default [
    {
        id: 'liveWork',
        isDefault: true,
        when: '/liveWork',
        controller: 'LiveWorkController',
        controllerAs: 'liveWork',
        template: tpl
    }
];
