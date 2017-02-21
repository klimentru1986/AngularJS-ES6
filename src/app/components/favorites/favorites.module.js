import favoritesComponent from './favorites.component';
import favoritCard from './favoritCard.component';
import favoritesList from './favoritesList.component';

const favorites = angular.module('favorites', []);

favorites.component('favorites', favoritesComponent)
    .component('favoritesList', favoritesList)
    .component('favoritCard', favoritCard);

export default favorites;