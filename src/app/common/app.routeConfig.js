let routeConfig = ($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/recipes');

    $stateProvider
        .state('recipes', {
            name: 'recipes',
            url: '/recipes',
            redirectTo: 'beers',
            component: 'recipes'
        })
        .state('beers', {
            parent: 'recipes',
            name: 'beers',
            url: '/beers',
            component: 'recipesTable'
        })
        .state('beer', {
        parent: 'recipes',
        name: 'beer',
        url: '/beer/:id',
        component: 'recipeDetails'
    })
        .state('favorites', {
            name: 'favorites',
            url: '/favorites',
            component: 'favorites'
        });
};

export default routeConfig;