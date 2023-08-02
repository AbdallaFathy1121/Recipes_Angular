import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "./recipe.model";
import { DataStorageService } from "../shared/data-storage.service";
import { inject } from '@angular/core';
import { RecipeService } from "./recipe.service";

export const RecipeResolverService: ResolveFn<Recipe[]> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    dataStorageService: DataStorageService = inject(DataStorageService),
    recipeService: RecipeService = inject(RecipeService)
) => {
    const recipes = recipeService.getRecipes();
    return recipes.length === 0 ? dataStorageService.fetchRecipes() : recipes;
}