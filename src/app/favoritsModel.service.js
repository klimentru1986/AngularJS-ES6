let favorits = [];

class FavoritsModel {

    get() {
        return favorits;
    }

    remove(beer) {
        favorits = favorits.filter(item => item !== beer);
    }

    push(beer) {
        favorits.push(beer);
    }
}

export default FavoritsModel;