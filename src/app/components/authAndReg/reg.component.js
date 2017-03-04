import templateUrl from './reg.component.html'

class RegCtrl {
    constructor(authService, $state) {
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

    reg() {
        this.authService.auth = true;
    }
}

const reg = {
    templateUrl,
    controller: RegCtrl
};

export default reg;