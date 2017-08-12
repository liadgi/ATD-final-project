
export function formatName(name){
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

export function newUser(){
    return new User('','','','','',new Date);
}

export class User{
    _id: string;
    username: string;
    password: string;
    fname: string;
    lname: string;
    email: string;
    birthday: Date;
    profile_pic: string;
    followers: string[];
    following: string[];
    
    constructor(
        username: string,
        password: string,
        fname: string,
        lname: string,
        email: string,
        birthday: Date,
        ){
            this.username = username;
            this.password = password; 
            this.fname = formatName(fname);
            this.lname = formatName(lname);
            this.email = email;
            this.birthday = birthday;
            this.profile_pic = '';
            this.followers = [];
            this.following = [];
    }
}


// TODO: REMOVE THIS!
export class Profile{
    username: string;
    following: string[];
    followers: string[];

    constructor(
        username: string,
        following: string[],
        followers: string[]) {
            this.username = username;
            this.following = following;
            this.followers = followers;
        }
}


export function newComment(){
    return new Comment('','','');
}

export class Comment{
    postId: string;
    user: string;
    text: string;

    constructor(postId: string, user: string, text: string){
        this.postId = postId;
        this.user = user;
        this.text = text;
    }
}


export function newInstruction(){
    return new Instruction([],'');
}

export class Instruction{
    images: string[];
    text: string;

    constructor(images: string[], text: string){
        this.images = images;
        this.text = text;
    }
}

export function newPost(){
    return new Post('','','',[],[],[]);
}


export class Post{
    _id: string;
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
        instructions: Instruction[])
        {
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