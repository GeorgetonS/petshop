import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { FramePageComponent } from './pages/master/frame.page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { AuthService } from './services/auth.services';

const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    //canActivate: [AuthService],
    children: [
      { path: '', component: ProductsPageComponent,canActivate: [AuthService] },
      { path: 'cart', component: CartPageComponent, canActivate: [AuthService] },
    ]
  },
  {
    path: 'account',
    component: FramePageComponent,
    children: [
      { path: 'pets', component: PetsPageComponent },
    ]
  },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'reset-password', component: ResetPasswordPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// <app-navbar></app-navbar>

// <app-signup-page></app-signup-page>

// <app-cart-page></app-cart-page>

// <app-reset-password-page></app-reset-password-page>

// <app-login-page></app-login-page>

// <app-pets-page></app-pets-page>

// <app-products-page></app-products-page>

// <app-signup-page></app-signup-page>


// {
//   path: 'login/:parametro?teste=true&par=2',
//   component: LoginPageComponent
// }