import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{ReactiveFormsModule} from "@angular/forms";
import { HttpInterceptor,HttpEvent,HttpRequest,HttpHandler, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { AddDetailsComponent } from './components/add-details/add-details.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { AddreviewsComponent } from './components/addreviews/addreviews.component';
import { ViewReviewComponent } from './components/view-review/view-review.component';
import { AuthInterceptor, authInterceptorProviders } from './components/services/auth.interceptor';
import { UserService } from './components/services/user.service';
import { ApproveComponent } from './components/approve/approve.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    AddDetailsComponent,
    ViewDetailsComponent,
    AddProductsComponent,
    AddreviewsComponent,
    ViewReviewComponent,
    ApproveComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [ authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
