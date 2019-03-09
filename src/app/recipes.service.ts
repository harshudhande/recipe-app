import { Injectable} from '@angular/core';
import { recipe } from './recipes/recipe.model';
import { ingradient } from './shared/ingradient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

  recipeChanged = new Subject<recipe[]>();

  recipes: recipe[] = [
   new recipe( 'Tasty Schnitzel',
     'A super-tasty Schnitzel - just awesome!',
     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
     [ new ingradient('chicken', 1),
       new ingradient('fries', 4)
     ]),
       new recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
         [new ingradient('buns', 2),
          new ingradient('lettuce', 17)
         ])
  ];

  constructor(private slService: ShoppingListService) {}
  getRecipe() {
    return this.recipes.slice();

    //return this.recipes;
  }
  setRecipes(recipes: recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }
  getRecipeById(index: number) {
    return this.recipes[index];


  }
  addIngradientsToShoppingList(ingredients:ingradient[]) {
    this.slService.addIngradientsfrmRecipe(ingredients);
    console.log(ingredients);
  }
  UpdateRecipe(index: number, newRecipe: recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  addRecipe(newrecipe: recipe) {
    this.recipes.push(newrecipe);
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
