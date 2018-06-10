export class LoginModel {
    userName: string;
    isUserLogged: boolean;
    loginErrors: string[];
    constructor() {
        this.userName = '';
        this.isUserLogged = false;
        this.loginErrors = [];
    }
}
