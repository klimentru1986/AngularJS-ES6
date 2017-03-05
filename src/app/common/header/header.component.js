import templateUrl from './header.component.html';

class HeaderCtrl {
    constructor(authService, $state) {
        'ngInject';

        this.$state = $state;
        this.authService = authService;
    }

    logout() {
        this.authService.auth = false;
        this.$state.go('mainPage');
    }
}

const header = {
    templateUrl,
    controller: HeaderCtrl
};

export default header;