import { Component, OnInit } from '@angular/core';
import { RecipeHttpService } from '../../shared/recipehttp.service';
import { Response } from '@angular/http';
import { IngradientHttpService } from '../../shared/ingradienthttp.service';
import { AuthService } from '../../shared/auth.service';
import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  constructor(private recipehttpService: RecipeHttpService,
    private ingradientHttpService: IngradientHttpService,
    private authService: AuthService) {

  }
  ngOnInit() {
    
  }
  saveData() {
    this.recipehttpService.storeRecipes().subscribe(
      // (response: Response) => console.log(response)
      //(response: HttpEvent<Object>) => console.log(response.type === HttpEventType.Sent)
      (response) => console.log(response)
    );
    this.ingradientHttpService.saveIngradients().subscribe((
      response: Response) => console.log(response));
  }
  fetchData() {
    this.recipehttpService.getRecipes();
    this.ingradientHttpService.getIngradient();
    
  }
  onLogOut() {
    this.authService.logout();
  }
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
