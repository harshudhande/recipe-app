import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { recipe } from '../recipe.model';
import { RecipeService } from '../../recipes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  // @Output() recipeWasSelected = new EventEmitter < recipe > ();
  recipes: recipe[];
  recipeChangedEl: Subscription;
  constructor(private recipeService: RecipeService, private router: Router
    , private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipeChangedEl= this.recipeService.recipeChanged.subscribe(
      (recipes: recipe[]) => {
      this.recipes = recipes;
      });
    this.recipes = this.recipeService.getRecipe();

  }
  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  ngOnDestroy() {
    this.recipeChangedEl.unsubscribe();
  }

}
