import { Component, OnInit, Input } from '@angular/core';
import { recipe } from '../recipe.model';
import { RecipeService } from '../../recipes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: recipe;
  id: number;
  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute, private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
      this.id = +params['id'];
        this.recipe = this.recipeService.getRecipeById(this.id);
      });
  }
  onEditRecipe() {
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }
  addToShoppingList() {
    this.recipeService.addIngradientsToShoppingList(this.recipe.ingradients);
  
  }
  onDeleteRecipe() {
    if (this.authService.isAuthenticated()) {
      this.recipeService.deleteRecipe(this.id);
      this.router.navigate(['../'], { relativeTo: this.route });
    }
  }

}
