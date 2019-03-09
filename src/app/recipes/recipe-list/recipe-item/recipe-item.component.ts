import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { recipe } from '../../recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeElement: recipe;
  @Input() id: number;
 // @Output() recipeSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  
}
