import { NgModule } from '@angular/core';
import { HomeComponent } from './core/home/home.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'recipes', loadChildren: 'src/app/recipes/recipe.module#RecipeModule' },
  {
    path: 'shopping-list', loadChildren: 'src/app/shopping-list/shopping-list.module#ShoppingListModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
