/**
 *
 *  Routes module expose route information used in home feature
 *
 *  @author  sherwin
 *  @date    Sep 9, 2016
 *
 */

import tpl from './partials/celebrateProfile.html';

export default [
    {
        id: 'celebrateProfile',
        isDefault: true,
        when: '/celebrateProfile',
        controller: 'CelebrateProfileController',
        controllerAs: 'celebrateProfile',
        template: tpl
    }
];
