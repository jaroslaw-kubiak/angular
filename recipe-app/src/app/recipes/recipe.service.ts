import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Pizza', 'Very hot and spicy pizza', 'https://dacostantino.pl/wp-content/uploads/2022/01/IMG_20230120_141616_1-01-scaled.jpeg', [
      new Ingredient('nduja', 4),
      new Ingredient('jalapenio', 8),
      new Ingredient('salami', 7),
    ]),
    new Recipe(
      'Pasta',
      'Pasta with tomato and garlic',
      'https://www.allrecipes.com/thmb/5SdUVhHTMs-rta5sOblJESXThEE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11691-tomato-and-garlic-pasta-ddmfs-3x4-1-bf607984a23541f4ad936b33b22c9074.jpg',
      [new Ingredient('tomato', 10), new Ingredient('garlic', 2), new Ingredient('parmegiano', 1)],
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
