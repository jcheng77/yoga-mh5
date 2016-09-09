/**
 *  index.js launch the application.
 *
 *  @author  sherwin
 *  @date    Sep 9, 2016
 *
 */
require.ensure(['splash-screen/dist/splash.min.css', 'splash-screen'], function(require) {

    require('splash-screen/dist/splash.min.css').use();
    require('splash-screen').Splash.enable('circular');
});

require.ensure(['css/main.scss', 'splash-screen', './main'], function(require) {

    require('css/main.scss').use();

    var App = require('./main').default;
    (new App()).run();
});
