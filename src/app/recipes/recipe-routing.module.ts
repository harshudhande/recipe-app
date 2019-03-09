import { NgModule } from '@angular/core';
import { AuthGuard } from '../auth/authguard.service';

import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { RouterModule, Routes } from '@angular/router';



const RecipeRoutes: Routes = [
  {
    path: '', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
    ]
  },

];
@NgModule({
  imports: [RouterModule.forChild(RecipeRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class RecipeRoutingModule {

}
