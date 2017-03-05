import templateUrl from './mainPage.component.html';

class MainPageCtrl{
    constructor(authService, $state){
        'ngInject';

        this.authService = authService;
        this.$state = $state;
    }

    $onInit(){
        if(this.authService.auth){
            this.$state.go('recipes');
        }
    }
}

const mainPage = {
    templateUrl,
    controller: MainPageCtrl
};

export default mainPage;