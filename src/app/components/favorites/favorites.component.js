import templateUrl from './favorites.component.html';

class FavoritsController {

    constructor(favoritModel) {
        'ngInject';

        this.favoritModel = favoritModel;
    }

    $onInit() {
        console.log(this.favoritModel.get());
    }

}

const favorites = {
    templateUrl,
    controller: FavoritsController
};

export default favorites;