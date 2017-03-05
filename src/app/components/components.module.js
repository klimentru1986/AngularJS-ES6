import recipes from './recipes/recipes.module';
import favorites from './favorites/favorites.module';
import details from './details/recipeDetails.module';
import authAndReg from './authAndReg/authAndReg.module';
import mainPage from './mainPage/mainPage.module';

const components = angular.module('components', [
    'ui.router',
    mainPage.name,
    authAndReg.name,
    recipes.name,
    favorites.name,
    details.name
]);

export default components;

