import templateUrl from './recipesTable.component.html';

class RecipesTableCtrl {
    constructor(recipesService, $state) {
        'ngInject';

        this.recipesService = recipesService;
        this.$state = $state;
    }

    $onInit() {
        this.recipesService.getBeers()
            .then(
                response => {
                    this.beers = response;
                },
                error => {
                    console.error(error)
                }
            )

        this.query = {
            limit: 7,
            limitOptions: [7, 13, 20],
            page: 1
        }
    }

    goToDetails(id) {
        this.$state.go('beer', {'id': id});
    }
}

const recipesTable = {
    templateUrl,
    controller: RecipesTableCtrl
};

export default recipesTable;