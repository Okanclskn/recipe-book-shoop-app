import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-recipedetail',
    templateUrl: './recipeDetail.component.html',
    styleUrls: ['./recipeDetail.component.css']
})
export class RecipeDetailComponent {
@Input() recipeDetail;
}