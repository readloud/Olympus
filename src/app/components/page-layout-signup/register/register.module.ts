import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {RegisterComponent} from './register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule
  ],
  providers: [],
  exports: [RegisterComponent]
})
export class RegisterModule {
}
