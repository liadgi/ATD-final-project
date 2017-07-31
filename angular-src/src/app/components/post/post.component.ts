import { Component, OnInit, Input } from '@angular/core';
import { Post, Instruction, Comment } from '../../objects';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  setAuthor(author:string){
    this.post.author = author;
  }

  setTitle(title:string){
    this.post.title = title;
  }
  
  setDescription(description:string){
    this.post.description = description;
  }

  addIngredient(ingredient:string){
    this.post.ingredients.push(ingredient);
  }

  setIngredients(ingredients:string[]){
    this.post.ingredients = ingredients;
  }

  addInstruction(instruction:Instruction){
    this.post.instructions.push(instruction);
  }

  setInstructions(instructions: Instruction[]){
    this.post.instructions = instructions;
  }

  addLike(like: string){
    this.post.likes.push(like);
  }

  addComment(comment:Comment){
    this.post.comments.push(comment);
  }

}
