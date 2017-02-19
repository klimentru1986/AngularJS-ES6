import app from './common/app.module';

import rootComponent from './root.component';

const root = angular.module('root', [
    'ngMaterial',
    app.name
]);

root.component('root', rootComponent);