import templateUrl from './recipesTable.component.html';

class RecipesTableCtrl {
    constructor(recipesService) {
        'ngInject';

        this.recipesService = recipesService;
    }

    $onInit() {
        this.recipesService.getBeers()
            .then(
                response => {
                    this.beers = response;
                    console.log(response)
                },
                error => {
                    console.error(error)
                }
            )
    }

    goToDetails(id) {
        console.log(id);
    }
}

const recipesTable = {
    templateUrl,
    controller: RecipesTableCtrl
};

export default recipesTable;