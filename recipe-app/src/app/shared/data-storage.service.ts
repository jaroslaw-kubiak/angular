import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap, take, exhaustMap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

//{ providedIn: 'root' }
@Injectable()
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService,
  ) {}
  private BASE_URL =
    'https://angular-b1c0a-default-rtdb.europe-west1.firebasedatabase.app/';

  storeRecipe() {
    const recipes = this.recipeService.getRecipes();

    this.http.put(`${this.BASE_URL}/recipes.json`, recipes).subscribe(res => {
      // console.log(res);
    });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(`${this.BASE_URL}/recipes.json`).pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap(recipes => {
        this.recipeService.setRecipes(recipes);
      }),
    );
  }
}
