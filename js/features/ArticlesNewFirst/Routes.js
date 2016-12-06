/**
 *
 *  Routes module expose route information used in home feature
 *
 *  @author  sherwin
 *  @date    Sep 9, 2016
 *
 */

import tpl from './partials/articlesNewFirst.html';

export default [
    {
        id: 'articlesNewFirst',
        isDefault: true,
        when: '/articlesNewFirst',
        controller: 'ArticlesNewFirstController',
        controllerAs: 'articlesNewFirst',
        template: tpl
    }
];
