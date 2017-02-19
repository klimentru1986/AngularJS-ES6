let routeConfig = ($stateProvider) => {
    'ngInject';

    $stateProvider
        .state('recipes', {
            name: 'recipes',
            url: '/recipes',
            component: 'recipes'
        })
        .state('favorites', {
            name: 'favorites',
            url: '/favorites',
            component: 'favorites'
        });
};

export default routeConfig;