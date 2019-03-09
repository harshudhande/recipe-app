import { Component, OnInit } from '@angular/core';
import { ingradient } from '../shared/ingradient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
 // providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {

  ingradients: ingradient[];
  constructor(private shopListService: ShoppingListService) { }

  ngOnInit() {
    this.ingradients = this.shopListService.getShoppingList();
    this.shopListService.ingredientAdded.subscribe(
      (ingradients: ingradient[]) => { this.ingradients = ingradients; });
  }

  onEditItem(index: number) {
    this.shopListService.ingradientIndexForEditing.next(index);
  }

  //onIngradientAdded(event: ingradient) {
    //this.ingradients.push(event);
  //}

}
