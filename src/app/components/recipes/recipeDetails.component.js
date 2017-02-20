import templateUrl from './recipeDetails.component.html';

class RecipeDetailsCtrl {

    constructor($stateParams, recipesService, $state, favoritModel) {
        'ngInject';

        this.$stateParams = $stateParams;
        this.recipesService = recipesService;
        this.$state = $state;
        this.favoritModel = favoritModel;
    }

    $onInit() {
        this.recipesService.getBeer(this.$stateParams.id)
            .then(
                response => {
                    this.beer = response;
                },
                error => {
                    console.error(error);
                }
            )
    }

    goBack() {
        this.$state.go('beers');
    }

    push(beer) {
        this.favoritModel.push(beer);
    }

    remove(beer){
        this.favoritModel.remove(beer);
    }

    isFavorit(beer) {
        return this.favoritModel.get().indexOf(beer) !== -1;
    }
}

const recipeDetails = {
    templateUrl,
    controller: RecipeDetailsCtrl
};

export default recipeDetails;