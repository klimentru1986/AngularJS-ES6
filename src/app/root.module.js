import app from './common/app.module';

import rootComponent from './root.component';

import beers from './mock/beers';

const root = angular.module('root', [
    'ngMaterial',
    'md.data.table',
    app.name
]);

root.component('root', rootComponent);

root.run(()=>{
   console.log(beers);
});