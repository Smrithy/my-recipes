 
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable ()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('French Toast', ' Recipe for French toast',
         'assets/images/toast.jpeg',
         [ new Ingredient ('Apple', 10),
         new Ingredient ('Orange', 3)]),

         new Recipe('Pasta', ' Recipe for Pasta',
         'assets/images/pasta.jpeg',
         [ new Ingredient ('Tomato', 10),
         new Ingredient ('Pizza Base', 1),
         new Ingredient ('Cheese', 2)])
      ];

      constructor(private slService:ShoppingListService){

      }
      getRecipes(){
            return this.recipes.slice();

      }
      
      addIngredientsToShoppingList(ingredients: Ingredient[]){
            this.slService.addIngredients(ingredients);

      }
}