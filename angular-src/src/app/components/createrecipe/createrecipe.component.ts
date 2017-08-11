import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Post , Instruction } from '../../objects';
import { EditpostService } from '../../services/editpost.service';

@Component({
  selector: 'app-createrecipe',
  templateUrl: './createrecipe.component.html',
  styleUrls: ['./createrecipe.component.css']
})
export class CreaterecipeComponent implements OnInit {
  //post: Post;
  // newIngredient: string;
  // newInstruction: Instruction;

  constructor(
    private editpostService: EditpostService) { }

  ngOnInit() {
    this.editpostService.resetPost();
  }
  
}
