import app from './common/app.module';

import rootComponent from './root.component';

const root = angular.module('root', [
    'ngMaterial',
    'md.data.table',
    app.name
]);

root.component('root', rootComponent);