import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpHeaders } from '@angular/common/http';
import { RecipeService } from '../recipes.service';
import { recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class RecipeHttpService {
  constructor(private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) { }

  storeRecipes() {
   const token = this.authService.getToken();
  /*  return this.httpClient.put('https://recipe-app-5fb1c.firebaseio.com/recipes.json',
      this.recipeService.getRecipe(), {
        observe: 'body',
        headers:new HttpHeaders().set('autorization','bearer),
        params: new HttpParams().set('auth',token)
      });*/
   /* const req = new HttpRequest('PUT', 'https://recipe-app-5fb1c.firebaseio.com/recipes.json',
      this.recipeService.getRecipe(), {
        reportProgress: true,
        headers: new HttpHeaders().set('authorization', 'bearer hfghfhgdfhgfhd'),
        params: new HttpParams().set('auth', token)
      });*/
    const req = new HttpRequest('PUT', 'https://recipe-app-5fb1c.firebaseio.com/recipes.json',
      this.recipeService.getRecipe(), {reportProgress: true });
     return this.httpClient.request(req);
  }
  getRecipes() {
    //we needed token to enable authorization in backend side
    const token = this.authService.getToken();
    return this.httpClient.get<recipe[]>('https://recipe-app-5fb1c.firebaseio.com/recipes.json?auth=' + token,
      {
        //read only body of response
        observe: 'body',
        //decide type of response ,bydeafult json ,we can keep text also
        responseType: 'json'
      }).
      pipe(map((recipes) => {
        for (let recipe of recipes) {
          if (!recipe['ingradients']) {
            recipe['ingradients'] = [];
          }
          else {
            return recipes;
          }
        }
      })).
      subscribe((recipes: recipe[]) => {
        this.recipeService.setRecipes(recipes);
      })
      
  }
}
