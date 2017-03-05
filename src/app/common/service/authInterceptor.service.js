class AuthInterceptorService {

    constructor($location, authService) {
        'ngInject';

        this.$location = $location;
        this.authService = authService;

        this.response = (response) => {
            let nonAuthPages = ['/reg', '/auth'];
            let location = this.$location.path();

            if (!this.authService.auth && nonAuthPages.indexOf(location) == -1) {
                this.$location.path('/');
            }
            return response;
        };
    }


}

export default AuthInterceptorService;