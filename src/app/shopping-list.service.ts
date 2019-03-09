import { ingradient } from './shared/ingradient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientAdded = new Subject<ingradient[]>();
  ingradientIndexForEditing = new Subject<number>();
 private ingradients: ingradient[] = [
    new ingradient('Avacado', 10),
    new ingradient('Turmeric', 5),
  ];
  getShoppingList() {
    //slice provides just a copy of that array
    return this.ingradients.slice();
  }
  setIngradients(ingradients: ingradient[]) {
    this.ingradients = ingradients;
    this.ingredientAdded.next(this.ingradients.slice());
  }
  getIngradient(index: number) {
    return this.ingradients[index];
  }

  IngradientAdded(ingredient: ingradient) {
    this.ingradients.push(ingredient);
    this.ingredientAdded.next(this.ingradients.slice());
  }

  addIngradientsfrmRecipe(ingradients: ingradient[]) {
    /*for (let ingredient of ingradients) {
      IngradientAdded(ingredient);
    }*/
    console.log(ingradients);
    this.ingradients.push(...ingradients);//spread operator
    console.log(ingradients);
    this.ingredientAdded.next(this.ingradients.slice());

  }
  onUpdateIngradient(index: number, Ingradient: ingradient) {
    this.ingradients[index] = Ingradient;
    this.ingredientAdded.next(this.ingradients.slice());
  }
  onDeleteIngradient(index: number) {
    this.ingradients.splice(index,1);
    this.ingredientAdded.next(this.ingradients.slice());
  }
}
