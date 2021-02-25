import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../../recipe.model";

@Component({
    selector: 'app-recipeitem',
    templateUrl: './recipeItem.component.html',
    styleUrls: ['./recipeItem.component.css']
})
export class RecipeItemComponent {
@Input() recipe: Recipe;
@Output() selectedRecipe = new EventEmitter<Recipe>()
constructor() {}

onSelected() {
    console.log("onSelected")
    this.selectedRecipe.emit(this.recipe)
}

}