import templateUrl from './header.component.html';

class HeaderCtrl {
    constructor(authService) {
        'ngInject';

        this.authService = authService;
    }
}

const header = {
    templateUrl,
    controller: HeaderCtrl
};

export default header;