import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('First Recipe Name', 
        'First Description', 
        'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg',
        [
            new Ingredient('Meat', 2),
            new Ingredient('Frensh Fries', 34)
        ]),
        new Recipe('Second Recipe Name', 
        'Second Description', 
        'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg',
        [
            new Ingredient('Meat', 3),
            new Ingredient('Frensh Fries', 20)
        ]),
        new Recipe('Third Recipe Name', 
        'Third Description', 
        'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg',
        [
            new Ingredient('Meat', 7),
            new Ingredient('Frensh Fries', 64)
        ])
    ];

    constructor(private shoppingList: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingList.addIngredients(ingredients);
    }


}