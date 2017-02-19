import favoritesComponent from './favorites.component';

const favorites = angular.module('favorites', []);

favorites.component('favorites', favoritesComponent);

export default favorites;