/**
 *  SSOConfig set authorised configuration.
 *
 *  @author  sherwin
 *  @date    Sep 9, 2016
 *
 */
import ConfiguratorBase from 'lib/ConfiguratorBase';

class Configurator extends ConfiguratorBase {
    constructor(features, app) {
        super(features, app);
    }

    _httpConfig($httpProvider) {
        'ngInject';

        $httpProvider.defaults.headers.common.Accept = 'application/json;charset=utf-8';
        $httpProvider.defaults.withCredentials = false;
    }

    execute() {
        this.config(this._httpConfig);
    }
}

export default Configurator;
