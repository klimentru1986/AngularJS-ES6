import recipesComponent from './recipes.component';

const recipes = angular.module('recipes', []);

recipes.component('recipes', recipesComponent);

export default recipes;