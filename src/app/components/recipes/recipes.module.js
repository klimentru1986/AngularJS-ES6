import recipesComponent from './recipes.component';
import recipesTable from './recipesTable.component';

import recipesService from './services/recipes.service';

const recipes = angular.module('recipes', []);

recipes
    .component('recipesTable', recipesTable)
    .component('recipes', recipesComponent)
    .service('recipesService', recipesService);


export default recipes;