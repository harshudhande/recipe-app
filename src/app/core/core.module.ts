import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingListService } from '../shopping-list.service';
import { RecipeService } from '../recipes.service';
import { RecipeHttpService } from '../shared/recipehttp.service';
import { IngradientHttpService } from '../shared/ingradienthttp.service';
import { AuthService } from '../../app/shared/auth.service';
import { AppRoutingModule } from '../app-routing.module';
import { AuthInterCeptor } from '../shared/auth.interceptor';
import { LoggingInterceptor } from '../shared/logging.interceptor';

@NgModule({
  declarations:
    [HeaderComponent,
    HomeComponent],
  imports:
    [SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent],
  providers: [
    ShoppingListService,
    RecipeService,
    RecipeHttpService,
    IngradientHttpService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterCeptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor,multi:true}
    ]
})

export class CoreModule { }
