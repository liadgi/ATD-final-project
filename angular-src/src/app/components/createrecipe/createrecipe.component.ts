import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Post , Instruction } from '../../objects';

@Component({
  selector: 'app-createrecipe',
  templateUrl: './createrecipe.component.html',
  styleUrls: ['./createrecipe.component.css']
})
export class CreaterecipeComponent implements OnInit {
  post: Post;
  
  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService,
    private authService: AuthService) { }

  ngOnInit() {
    // TODO: change this to: this.post = new Post('','','',[],[],[]);
    // TODO: remove _id field ?
    this.post = new Post(
        '0',
        'liad',
        'Oven Roasted Black Pepper Chicken',
        'These juicy and peppery chicken thighs are ideal for your weeknight dinner rotation!',
        [
          '6 Chicken thighs (bone-in)',
          '1 tbsp Ginger-Garlic Paste (or 1/2 tbsp grated garlic + 1/2 tbsp grated fresh ginger)',
          '3 tbsp Worcestershire Sauce',
          '1 tsp Salt (or according to taste)',
          '1 tbsp fresh ground pepper (I like it a little coarsely ground)',
          'Juice of 1/2 lime',
          '1 tbsp freshly chopped cilantro, for garnish'],
        [  
          'http://picturetherecipe.com/wp-content/uploads/2015/01/Roasted-Black-Pepper-Chicken-by-PictureTheRecipe-com.jpg',             
          'http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg',
        ],
        [
          new Instruction(['http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg'],'Rinse and trim any excess fat off your chicken thighs, then make three slits in the meat to the bone. (This helps the marinade flavor just the skin of the chicken but the inner meat too)'),
          new Instruction(['http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg'],'Mix together the garlic- ginger paste , Worcestershire sauce, salt, freshly ground black pepper and squeeze in the juice of half a lime.'),
          new Instruction(['http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg','http://picturetherecipe.com/wp-content/uploads/2015/01/Black-Pepper-Roasted-Chicken-at-PictureTheRecipe-com.jpg'],'Spoon over the mixed marinade over the chicken thighs (you can do it in a zip lock bag if touching chicken makes you squeamish) and massage it into the chicken to coat both sides well. Cover and let the chicken marinade in the fridge for anywhere from 30 minutes to overnight.'),
          new Instruction([],"Pre-heat your oven to 400F and arrange your chicken in an oven proof skillet or casserole dish and roast the chicken for 40 minutes (or more depending on the size of your chicken...but keep in mind the slits will help cook the chicken faster than if you didn't score them) until the skin turns a lovely golden and the juices run clear when you poke it with a knife."),
          new Instruction([],'Garnish with some freshly chopped cilantro (parsley works too) and serve hot with fresh veggies, rice or mashed potatoes.')
        ]
      );
  }
  
  onPostSubmit(){
    // Validate Fields
    const valid = this.validateService.validatePost(this.post);
    if(!valid.success){
      this.flashMessage.show(valid.msg, {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    // upload post to server
    this.authService.createPost(this.post).subscribe((data) => {
      if(data.success){
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['/dashboard']);
      }else{
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        //this.router.navigate(['/createrecipe']);
      }
    });
    
  }

}
