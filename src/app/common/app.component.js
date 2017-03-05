import templateUrl from './app.component.html';

class AppComponentCtrl{
    constructor(authService){
        'ngInject';

        this.authService = authService;
    }
}

const appComponent = {
    templateUrl,
    controller: AppComponentCtrl
};

export default appComponent;