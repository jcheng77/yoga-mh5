/**
 *  HeadInit set all needed head info to the index.html.
 *
 *
 *  @author  sherwin
 *  @date    Sep 9, 2016
 *
 */

import InitBase from 'lib/InitBase';
import {element} from 'angular';
import __config from 'etc/config';

class Initializer extends InitBase {
    constructor(features) {
        super(features);
        this.head = element(document.head);
    }

    title(t) {
        var title = element('<title></title>');
        title.text(t);
        this.head.append(title);
    }

    meta(attr) {
        var meta = element('<meta>');
        meta.attr(attr);
        this.head.append(meta);
    }

    execute() {
        this.title(__config.appname);
        this.meta({'charset': 'utf-8'});
        this.meta({
            'name': 'viewport',
            'content': 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1.0, user-scalable=no, minimal-ui'
        });
        this.meta({'name': 'renderer', 'content': 'webkit'});
        this.meta({
            'http-equiv': 'X-UA-Compatible',
            'content': 'IE=edge,chrome=1'
        });
        this.meta({
            'name': 'apple-mobile-web-app-capable',
            'content': 'yes'
        });
        this.meta({
            'name': 'apple-mobile-web-app-capable',
            'content': 'yes'
        });
    }
}

export default Initializer;
