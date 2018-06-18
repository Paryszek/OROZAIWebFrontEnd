import { Member } from './member.model';

export class Admin {
    adminErrors: string[];
    users: Member[];
    constructor() {
        this.adminErrors = [];
        this.users = [];
    }
}
