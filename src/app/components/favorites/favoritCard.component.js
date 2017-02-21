import templateUrl from './favoritCard.component.html';

class FavoritCardController {

    constructor($state) {
        'ngInject';

        this.$state = $state;
    }

    goToDetails(id) {
        this.$state.go('favoritDetails', {'id': id});
    }
}

const favoritCard = {
    templateUrl,
    bindings: {
        beer: '<'
    },
    controller: FavoritCardController
};

export default favoritCard;