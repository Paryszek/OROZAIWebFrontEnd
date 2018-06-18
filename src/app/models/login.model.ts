export class LoginModel {
    userName: string;
    isUserLogged: boolean;
    loginErrors: string[];
    role: string;
    constructor() {
        this.role = '';
        this.userName = '';
        this.isUserLogged = false;
        this.loginErrors = [];
    }
}
