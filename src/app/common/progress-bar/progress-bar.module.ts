import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ProgressBarComponent} from './progress-bar.component';

@NgModule({
  declarations: [
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  exports: [ProgressBarComponent]
})
export class ProgressBarModule {
}
