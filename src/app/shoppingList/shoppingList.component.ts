import { Component } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
    selector: 'app-shoppinglist',
    templateUrl: './shoppingList.component.html',
    styleUrls: ['./shoppingList.component.css']
})
export class ShoppingListComponent {
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 10),
    ]

    onIngredientAdded(ingredient: Ingredient) {
        this.ingredients.push (ingredient)
    }
}