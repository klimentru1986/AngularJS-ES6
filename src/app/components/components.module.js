import recipes from './recipes/recipes.module';
import favorites from './favorites/favorites.module';
import details from './details/recipeDetails.module';

const components = angular.module('components', [
    'ui.router',
    recipes.name,
    favorites.name,
    details.name
]);

export default components;

