
import FeatureBase from 'lib/FeatureBase';
import Routes from './Routes';
import YogaLifeController from './controller/YogaLifeController';
import YogaLifeService from './service/YogaLifeService';

class Feature extends FeatureBase {

    constructor() {
        super('yogaLife');
        this.routes = Routes;
    }

    execute() {
        this.controller('YogaLifeController', YogaLifeController);
        this.service('YogaLifeService', YogaLifeService);
    }
}

export default Feature;
