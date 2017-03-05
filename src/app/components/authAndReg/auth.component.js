import templateUrl from './auth.component.html';

class AuthCtrl {
    constructor(authService, $state) {
        'ngInject';

        this.authService = authService;
        this.$state = $state;
    }

    auth(auth) {
        this.authService.auth = auth;

        if (auth) {
            this.$state.go('recipes');
        }
    };
}

const auth = {
    templateUrl,
    controller: AuthCtrl
};

export default auth;