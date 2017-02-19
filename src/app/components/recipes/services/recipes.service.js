class RecipesService {
    constructor($http) {
        'ngInject';
        this.$http = $http;
    }

    getBeers() {
        return this.$http.get('https://api.punkapi.com/v2/beers')
            .then(
                response => response.data,
                error => error
            );
    }
}

export default RecipesService;