import auth from './auth.component';
import reg from './reg.component';

const authAndReg = angular.module('authAndReg', []);

authAndReg.component('auth', auth)
    .component('reg', reg);

export default authAndReg;