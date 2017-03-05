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


    reg() {

        this.authService.auth = true;
        this.$state.go('recipes');
    };
}

const reg = {
    templateUrl,
    controller: RegCtrl
};

export default reg;