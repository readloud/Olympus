import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './components/page-layout-signup/register/register.component';
import {PageLayoutSignupComponent} from './components/page-layout-signup/page-layout-signup.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from './components/page-layout-signup/login/login.component';
import {AppLayoutComponent} from './components/app-layout/app-layout.component';
import {ProfilePageComponent} from './components/app-layout/profile-page/profile-page.component';

const appRoutes: Routes = [

  {path: '', component: PageLayoutSignupComponent,
    children: [
      { path: '', redirectTo: 'register', pathMatch: 'full' },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent }
    ]},
  {path: '', component: AppLayoutComponent,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', component: ProfilePageComponent }
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export  class  AdminRoutingModule { }
