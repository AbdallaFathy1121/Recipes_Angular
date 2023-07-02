import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe('First Recipe Name', 'First Description', 'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg'),
    new Recipe('Second Recipe Name', 'Second Description', 'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg')
  ];


  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }


}


