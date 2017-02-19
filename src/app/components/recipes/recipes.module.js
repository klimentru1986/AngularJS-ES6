import recipesComponent from './recipes.component';
import recipesTable from './recipesTable.component';
import recipeDetails from './recipeDetails.component';

import recipesService from './services/recipes.service';

const recipes = angular.module('recipes', []);

recipes
    .component('recipesTable', recipesTable)
    .component('recipeDetails', recipeDetails)
    .component('recipes', recipesComponent)
    .service('recipesService', recipesService);


export default recipes;