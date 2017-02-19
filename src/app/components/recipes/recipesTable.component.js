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
                    console.log(response)
                },
                error => {
                    console.error(error)
                }
            )
    }
}

const recipesTable = {
    templateUrl,
    controller: RecipesTableCtrl
};

export default recipesTable;