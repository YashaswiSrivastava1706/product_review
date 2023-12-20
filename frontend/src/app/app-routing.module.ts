import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDetailsComponent } from './components/add-details/add-details.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { AuthGuard } from './components/services/auth.guard';
import { AddreviewsComponent } from './components/addreviews/addreviews.component';
import { ViewReviewComponent } from './components/view-review/view-review.component';
import { ApproveComponent } from './components/approve/approve.component';

const routes: Routes = [
  {
    path: 'login', // Route path for the login page
    component: LoginComponent, // Component to be rendered for the login page
    pathMatch: 'full' // Matches the full path
  },
  {
    path: 'register', // Route path for the register page
    component: RegisterComponent, // Component to be rendered for the register page
    pathMatch: 'full' // Matches the full path
  },
  {
    path: 'search', // Route path for the search page
    component: SearchComponent, // Component to be rendered for the search page
    pathMatch: 'full', // Matches the full path
    canActivate: [AuthGuard] // Guard to check if user is authenticated
  },
  {
    path: 'view-products', // Route path for the view products page
    component: ViewDetailsComponent, // Component to be rendered for the view products page
    pathMatch: 'full', // Matches the full path
    canActivate: [AuthGuard] // Guard to check if user is authenticated
  },
  {
    path: 'add-products', // Route path for the add products page
    component: AddProductsComponent, // Component to be rendered for the add products page
    pathMatch: 'full', // Matches the full path
    canActivate: [AuthGuard] // Guard to check if user is authenticated
  },
  {
    path: 'addreviews', // Route path for the add reviews page
    component: AddreviewsComponent, // Component to be rendered for the add reviews page
    pathMatch: 'full', // Matches the full path
    canActivate: [AuthGuard] // Guard to check if user is authenticated
  },
  {
    path: 'addreviews/:productId', // Route path for the add reviews page with productId parameter
    component: AddreviewsComponent, // Component to be rendered for the add reviews page
    pathMatch: 'full', // Matches the full path
    canActivate: [AuthGuard] // Guard to check if user is authenticated
  },
  {
    path: 'view-review/:productId', // Route path for the view review page with productId parameter
    component: ViewReviewComponent, // Component to be rendered for the view review page
    pathMatch: 'full', // Matches the full path
    canActivate: [AuthGuard] // Guard to check if user is authenticated
  },
  {
    path: 'view-review', // Route path for the view review page
    component: ViewReviewComponent, // Component to be rendered for the view review page
    pathMatch: 'full', // Matches the full path
    canActivate: [AuthGuard] // Guard to check if user is authenticated
  },
  {
    path: 'approve', // Route path for the approve page
    component: ApproveComponent, // Component to be rendered for the approve page
    pathMatch: 'full', // Matches the full path
    canActivate: [AuthGuard] // Guard to check if user is authenticated
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
