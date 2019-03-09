import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../../recipes.service';
import { recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeform: FormGroup;
  
  constructor(private route: ActivatedRoute, private recipeService: RecipeService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
      this.id = +params['id'];
        this.editMode = params['id'] != null;//this will check id param as a string and this.id is number.
        this.initForm();
      });
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngradients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.recipeName;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      //recipes can be without ingradients
      if (recipe['ingradients']) {
        for (let ingradient of recipe.ingradients) {
          recipeIngradients.push(new FormGroup({
            'name': new FormControl(ingradient.name, Validators.required),
            'quantity': new FormControl(ingradient.quantity,
              [Validators.required, Validators.pattern('^[1-9][0-9]*$')])
          }));
        }
      }
      
    
    }
    this.recipeform = new FormGroup({
      'recipeName': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingradients': recipeIngradients
    });

  }
  onSubmit() {
    /*const newRecipe = new recipe(
      this.recipeform.value['recipeName'],
      this.recipeform.value['description'],
      this.recipeform.value['imagePath'],
      this.recipeform.value['ingradients']);*/
    if (this.editMode) {
      this.recipeService.UpdateRecipe(this.id, this.recipeform.value);
    } else {
      this.recipeService.addRecipe(this.recipeform.value);
    }
    this.onCancel();
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
}
  onAddIngredient() {
    (<FormArray>this.recipeform.get('ingradients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'quantity': new FormControl(null,
        [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)])
    })
    );
  }
  onDeleteIngradients(index: number) {
    (<FormArray>this.recipeform.get('ingradients')).removeAt(index);
      
  }
}
