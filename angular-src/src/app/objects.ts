
function formatName(name){
    return name.substr(0,1).toUpperCase()+name.substr(1).toLowerCase();
}
export class Credentials{
    username: string;
    password: string;

    constructor(username: string, password: string){
        this.username = username;
        this.password = password;
    }
}

export class User{
    fname: string;
    lname: string;
    email: string;
    username: string;
    password: string;
    
    constructor(
        fname: string,
        lname: string,
        email: string,
        username: string,
        password: string){
            this.fname = formatName(fname);
            this.lname = formatName(lname);
            this.email = email;
            this.username = username;
            this.password = password; 
    }
}

export class Comment{
    user: string;
    text: string;

    constructor(user: string, text: string){
        this.user = user;
        this.text = text;
    }
}

export class Instruction{
    images: string[];
    text: string;

    constructor(images: string[], text: string){
        this.images = images;
        this.text = text;
    }
}

export class Post{
    author: string;
    title: string;
    description: string;
    ingredients: string[];
    images: string[];
    instructions: Instruction[];
    likes: string[];
    comments: Comment[];
    creationTime: Date;
    updateTime: Date;

    constructor(
        author: string,
        title: string,
        description: string,
        ingredients: string[],
        images: string[],
        instructions: Instruction[]){
            this.author = author;
            this.title = title;
            this.description = description;
            this.ingredients = ingredients;
            this.images = images;
            this.instructions = instructions;
            this.likes = [];
            this.comments = [];
            this.creationTime = new Date();
            this.updateTime = null;
    }
}