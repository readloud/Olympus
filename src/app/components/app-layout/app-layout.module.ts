import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppLayoutComponent} from './app-layout.component';
import {ProfilePageModule} from './profile-page/profile-page.module';

@NgModule({
  declarations: [
    AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ProfilePageModule
  ],
  providers: [],
  exports: [AppLayoutComponent]
})
export class AppLayoutModule {
}
