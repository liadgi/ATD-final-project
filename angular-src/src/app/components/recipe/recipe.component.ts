import { Component, OnInit } from '@angular/core';
import { EditpostService } from '../../services/editpost.service';
import { Post, Instruction } from '../../objects';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  post: Post;
  newIngredient: string;
  newInstruction: Instruction;
  newCoauthor: string;

  constructor(private editpostService: EditpostService,
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router, ) { }

  ngOnInit() {
    this.post = this.editpostService.post;
    this.newCoauthor = '';
    this.newIngredient = '';
    this.newInstruction = new Instruction([], '');
  }

  onPostSubmit() {
    // TODO : Validate Fields
    const valid = this.validateService.validatePost(this.post);
    if (!valid.success) {
      this.flashMessage.show(valid.msg, { cssClass: 'alert-danger', timeout: 5000 });
      return false;
    }

    let callback = (data) => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
        this.router.navigate(['/home']);
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
        // TODO : what about this
        //this.router.navigate(['/createrecipe']);
      }
    }

    if (this.router.url === '/createrecipe') {
      this.authService.post('posts/createpost',{'post': this.post }).subscribe(callback);
    } else if (this.router.url === '/editRecipe') {
      this.authService.post('posts/editPost', {'post': this.post }).subscribe(callback);
    }


  }

  addIngredient() {
    if (this.newIngredient === '')
      this.flashMessage.show('Please enter valid ingredient', { cssClass: 'alert-danger', timeout: 5000 });
    else {
      this.post.ingredients.push(this.newIngredient);
      this.newIngredient = '';
    }
  }

  removeIngredient(i) {
    this.post.ingredients.splice(i, 1);
  }

  addInstruction(i) {
    this.post.instructions.push(this.newInstruction);
    this.newInstruction = new Instruction([], '');
  }

  removeInstruction(i) {
    this.post.instructions.splice(i, 1);
  }

  onNotifyImageAdded(image: string, images:string[]){
    images.push(image);
  }

  addCoauthor() {
    if (this.newCoauthor === '')
      this.flashMessage.show('Please enter valid coauthor', { cssClass: 'alert-danger', timeout: 5000 });
    else {
      this.getUser(this.newCoauthor, (user) => {
        if(user && user.username && !this.post.coauthors.includes(user.username))
          this.post.coauthors.push(user.username);
        else this.flashMessage.show('Please enter valid coauthor', { cssClass: 'alert-danger', timeout: 5000 });
        this.newCoauthor = '';
      });
    }
  }

  removeCoauthor(i) {
    this.post.coauthors.splice(i, 1);
  }

  getUser(username, callback){
    this.authService.get('users/profile/'+username).subscribe(
      (data) => {
        if (data.success) callback(data.user); 
        else callback(null);
      },
      (err) => { throw err; }
      );
  }
  

}
