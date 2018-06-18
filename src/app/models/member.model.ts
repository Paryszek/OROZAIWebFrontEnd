export class Member {
    id: number;
    firstName: string;
    lastName: string;
    login: string;
    password: string;
    birthDate: string;
    constructor(id: number, firstName: string, lastName: string, login: string, password: string, birthDate: string) {
        this.id = !!id ? id : undefined;
        this.firstName = firstName;
        this.lastName = lastName;
        this.login = login;
        this.password = password;
        this.birthDate = birthDate;
    }
}

export class MemberLogin {
    login: string;
    password: string;
    constructor(login: string, password: string) {
        this.login = login;
        this.password = password;
    }
}
