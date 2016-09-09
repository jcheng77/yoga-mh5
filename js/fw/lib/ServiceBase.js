/**
 *  ServiceBase class
 *
 *
 *  @author  sherwin
 *  @date    Sep 9, 2016
 *
 */

class ServiceBase {

    constructor(features, app) {
        this.features = features;
        this.app = app;

        this.factory = app.factory;
        this.service = app.service;
    }

    execute() {}
}

export default ServiceBase;
