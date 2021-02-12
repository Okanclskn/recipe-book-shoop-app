import { Component } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector: 'app-recipelist',
    templateUrl: './recipeList.component.html',
    styleUrls: ['./recipeList.component.css']
})
export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe('A Test Recipe','This is a Test', 'https://realfood.tesco.com/media/images/RFO-1400x919-AsianSalmon-9a9cf566-eaad-4107-aa79-886ec53e6b31-0-1400x919.jpg'),
        new Recipe('A Test Recipe','This is a Test', 'https://realfood.tesco.com/media/images/RFO-1400x919-AsianSalmon-9a9cf566-eaad-4107-aa79-886ec53e6b31-0-1400x919.jpg'),
        new Recipe('A Test Recipe','This is a Test', 'https://realfood.tesco.com/media/images/RFO-1400x919-AsianSalmon-9a9cf566-eaad-4107-aa79-886ec53e6b31-0-1400x919.jpg'),
    ];

    constructor(){}
}