import templateUrl from './reg.component.html'

class RegCtrl {
    constructor(authService, $state) {
        'ngInject';

        this.authService = authService;
        this.$state = $state;
    }

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