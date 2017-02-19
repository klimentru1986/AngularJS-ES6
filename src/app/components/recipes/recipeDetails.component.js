import templateUrl from './recipeDetails.component.html';

class RecipeDetailsCtrl {

    constructor($stateParams, recipesService, $state) {
        'ngInject';

        this.$stateParams = $stateParams;
        this.recipesService = recipesService;
        this.$state = $state;
    }

    $onInit() {
        console.log(this.$stateParams);
        this.recipesService.getBeer(this.$stateParams.id)
            .then(
                response => {
                    this.beer = response;
                    console.log(response);
                },
                error => {
                    console.error(error);
                }
            )
    }

    goBack() {
        this.$state.go('beers');
    }
}

const recipeDetails = {
    templateUrl,
    controller: RecipeDetailsCtrl
};

export default recipeDetails;