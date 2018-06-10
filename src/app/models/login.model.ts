export class LoginModel {
    isUserLogged: boolean;
    loginErrors: string[];
    constructor() {
        this.isUserLogged = false;
        this.loginErrors = [];
    }
}
