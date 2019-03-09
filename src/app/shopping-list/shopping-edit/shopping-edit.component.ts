import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ingradient } from '../../shared/ingradient.model';
import { ShoppingListService } from '../../shopping-list.service';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  //@ViewChild('nameInput') inputNameRef: ElementRef;
  //@ViewChild('amountInput') inputQuantityRef: ElementRef;
 // @Output() ingradientAdded = new EventEmitter<ingradient>();
  editMode = false;
  editedItem: ingradient;
  editedIndex: number;
  addUpdateButtonVal = 'Add';
  constructor(private shopListService: ShoppingListService) { }

  ngOnInit() {
    this.shopListService.ingradientIndexForEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedIndex = index;
        this.editedItem = this.shopListService.getIngradient(index);
        this.form.setValue({
          'name': this.editedItem.name,
          'amount': this.editedItem.quantity
        })
      })

  }
  onAddItem(form: FormControl) {
   // const name = this.inputNameRef.nativeElement.value;
  //  const quantity = this.inputQuantityRef.nativeElement.value;
    const value = form.value;
    const newIngradient = new ingradient(value.name, value.amount);
    if (this.editMode) {
      this.shopListService.onUpdateIngradient(this.editedIndex, newIngradient);
    } else {
      this.shopListService.IngradientAdded(newIngradient);
    }
      this.editMode = false;
    this.form.reset();
  }
  onDeleteItem() {
    this.onResetItem();
    this.shopListService.onDeleteIngradient(this.editedIndex);
  }
  onResetItem() {
    this.form.reset();
    this.editMode = false;
  }
  
}
