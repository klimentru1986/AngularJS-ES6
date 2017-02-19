import recipes from './recipes/recipes.module';
import favorites from './favorites/favorites.module';

const components = angular.module('components', [
    'ui.router',
    recipes.name,
    favorites.name
]);

export default components;

