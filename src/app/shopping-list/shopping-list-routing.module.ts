import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';

const shoppingListRouting: Routes = [
  { path: '', component: ShoppingListComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(shoppingListRouting)
  ],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule { }
