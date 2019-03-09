import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ShoppingListService } from '../shopping-list.service';
import { map } from 'rxjs/operators';
import { ingradient } from './ingradient.model';

@Injectable()
export class IngradientHttpService {
  constructor(private http: Http, private shopListService: ShoppingListService) { }

  saveIngradients() {
    return this.http.put('https://ng-http-9f106.firebaseio.com/ingradients.json',
      this.shopListService.getShoppingList());
  }
  getIngradient() {
    return this.http.get('https://ng-http-9f106.firebaseio.com/ingradients.json').
      pipe(map((response: Response) => {// this map method use if we want to update anything
        const ingradients: ingradient[] = response.json();
        for (let ingradient of ingradients) {
          ingradient['name'] = 'Add...' + ingradient['name'];
        }
        return ingradients;
      })).
      subscribe(
        (ingradients: ingradient[]) => {
          this.shopListService.setIngradients(ingradients);
  });// to set ingradient array
  }
}
