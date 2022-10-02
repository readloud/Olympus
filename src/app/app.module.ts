import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AdminRoutingModule} from './routes';
import {PageLayoutSignupModule} from './components/page-layout-signup/page-layout-signup.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppLayoutModule} from './components/app-layout/app-layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AdminRoutingModule,
    PageLayoutSignupModule,
    AppLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
