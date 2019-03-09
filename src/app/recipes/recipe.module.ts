import { NgModule } from '@angular/core';
import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeListComponent } from '../recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from '../recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RecipeRoutingModule } from './recipe-routing.module';



@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipeRoutingModule,
    SharedModule],
  exports: []
})
export class RecipeModule {

}
