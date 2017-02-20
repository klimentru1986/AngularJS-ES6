import app from './common/app.module';

import FavoritModelService from './favoritsModel.service';

import rootComponent from './root.component';

const root = angular.module('root', [
    'ngMaterial',
    'md.data.table',
    app.name
]);

root.service('favoritModel', FavoritModelService)
    .component('root', rootComponent);
