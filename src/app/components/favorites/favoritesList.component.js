import templateUrl from './favoritesList.component.html';

class FavoritsListController {

    constructor(favoritModel) {
        'ngInject';

        this.favoritModel = favoritModel;
    }

    $onInit() {
        this.favorits = this.favoritModel.get();
    }

}

const favoritesList = {
    templateUrl,
    controller: FavoritsListController
};

export default favoritesList;