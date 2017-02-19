import commonComponent from './common.component';
import header from './header/header.component';
import nav from './nav/nav.component';

const common = angular.module('common',[]);

common
    .component('common', commonComponent)
    .component('header', header)
    .component('nav', nav);

export default common;