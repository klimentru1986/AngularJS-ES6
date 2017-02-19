import templateUrl from './recipesTable.component.html';

class RecipesTableCtrl {
    constructor(recipesService, $state, $timeout) {
        'ngInject';

        this.recipesService = recipesService;
        this.$state = $state;
        this.$timeout = $timeout;
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
            order: 'name',
            limit: 7,
            limitOptions: [7, 13, 20],
            page: 1
        };

        this.progress = this.$timeout(function () {
            // loading
        }, 2000);
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