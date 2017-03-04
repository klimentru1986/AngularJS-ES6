import recipes from './recipes/recipes.module';
import favorites from './favorites/favorites.module';
import details from './details/recipeDetails.module';
import authAndReg from './authAndReg/authAndReg.module';

const components = angular.module('components', [
    'ui.router',
    authAndReg.name,
    recipes.name,
    favorites.name,
    details.name
]);

export default components;

