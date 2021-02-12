import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailComponent } from './recipes/recipeDetail/recipeDetail.component';
import { RecipeItemComponent } from './recipes/recipeList/recipeItem/recipeItem.component';
import { RecipeListComponent } from './recipes/recipeList/recipeList.component';
import { ShoppingListComponent } from './shoppingList/shoppingList.component';
import { ShoppingListEditComponent } from './shoppingList/shoppingListEdit/shoppingListEdit.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
