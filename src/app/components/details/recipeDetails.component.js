import templateUrl from './recipeDetails.component.html';

class RecipeDetailsCtrl {

    constructor($stateParams, recipesService, $state, favoritModel) {
        'ngInject';

        this.$stateParams = $stateParams;
        this.recipesService = recipesService;
        this.$state = $state;
        this.favoritModel = favoritModel;
    }

    // $onInit() {
    //     this.recipesService.getBeer(this.$stateParams.id)
    //         .then(
    //             response => {
    //                 this.beer = response;
    //             },
    //             error => {
    //                 console.error(error);
    //             }
    //         )
    // }

    goBack() {
        window.history.go(-1);
    }

    push(beer) {
        this.favoritModel.push(beer);
    }

    remove(beer) {
        this.favoritModel.remove(beer);
    }

    isFavorit(beer) {
        return this.favoritModel.get().find(item => beer && item.id === beer.id) ? true : false;
    }
}

const recipeDetails = {
    templateUrl,
    controller: RecipeDetailsCtrl,
    bindings: {
        beer: '<'
    }
};

export default recipeDetails;