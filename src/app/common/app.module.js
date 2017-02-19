import routeConfig from './app.routeConfig';

import appComponent from './app.component';
import header from './header/header.component';
import nav from './nav/nav.component';
import components from './../components/components.module';

const app = angular.module('app',[
    'ui.router',
    components.name
]);

app
    .config(routeConfig)
    .component('app', appComponent)
    .component('header', header)
    .component('nav', nav);


export default app;