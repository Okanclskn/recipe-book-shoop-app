import { Component, ElementRef, ViewChild, EventEmitter, Output} from "@angular/core";

import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
    selector: 'app-shoppinglistedit',
    templateUrl: './shoppingListEdit.component.html',
    styleUrls: ['./shoppingListEdit.component.css']
})
export class ShoppingListEditComponent {
@ViewChild('nameInput') nameInputRef: ElementRef;
@ViewChild('amountInput') amountInputRef: ElementRef;
@Output() ingredientAdded= new EventEmitter<Ingredient>()

    onAddItem() {
        const ingName = this.nameInputRef.nativeElement.value;
        const ingAmount = this.amountInputRef.nativeElement.value;
        const newIngredient = new Ingredient (ingName, ingAmount);
        this.ingredientAdded.emit(newIngredient)
    }
}