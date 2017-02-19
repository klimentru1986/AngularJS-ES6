import common from './common/common.module';

import rootComponent from './root.component';

const root = angular.module('root', [
    'ngMaterial',
    common.name
]);

root.component('root', rootComponent);