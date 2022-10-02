import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {BadgeComponent} from './badge.component';

@NgModule({
  declarations: [
    BadgeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  exports: [BadgeComponent]
})
export class BadgeModule {
}
