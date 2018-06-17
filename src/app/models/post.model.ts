export class Post {
    id: number;
    title: string;
    body: string;
    owner: string;
    dateCreated: string;
    image: string;
    constructor(id:number, title: string, body: string, owner: string, dateCreated: string, image: string) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.owner = owner;
        this.dateCreated = dateCreated;
        this.image = image;
    }
}
