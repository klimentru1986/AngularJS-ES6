let routeConfig = ($stateProvider, $urlRouterProvider) => {
    'ngInject';


    $urlRouterProvider.otherwise('/recipes');

    $stateProvider
        .state('auth',{
            name: 'auth',
            url: '/auth',
            component: 'auth'
        })
        .state('reg',{
            name: 'reg',
            url: '/reg',
            component: 'reg'
        })
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
            component: 'recipeDetails',
            bindings: {beer: 'getBeer'},
            resolve: {
                getBeer: (recipesService, $stateParams) => {
                    'ngInject';
                    return recipesService.getBeer($stateParams.id)
                }
            }
        })
        .state('favorites', {
            redirectTo: 'list',
            name: 'favorites',
            url: '/favorites',
            component: 'favorites'
        })
        .state('list', {
            parent: 'favorites',
            name: 'list',
            url: '/list',
            component: 'favoritesList'
        })
        .state('favoritDetails', {
            parent: 'favorites',
            name: 'favoritDetails',
            url: '/:id',
            component: 'recipeDetails',
            bindings: {beer: 'getBeer'},
            resolve: {
                getBeer: (recipesService, $stateParams) => {
                    'ngInject';
                    return recipesService.getBeer($stateParams.id)
                }
            }
        });

};
export default routeConfig;
