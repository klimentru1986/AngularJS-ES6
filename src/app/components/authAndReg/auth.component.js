import templateUrl from './auth.component.html';

class AuthCtrl {
    constructor(authService, $state){
        'ngInject';

        this.authService = authService;
        this.$state = $state;
    }

    $onInit() {

        this.regexp = {
            emial: /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/
        }
    };

    auth(auth) {
        this.authService.auth = auth;

        // if (auth) {
        //     this.$state.go('currency')
        // }
    }
}

const auth = {
    templateUrl,
    controller: AuthCtrl
};

export default auth;