import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {PhotoComponent} from './photo.component';

@NgModule({
  declarations: [
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  exports: [PhotoComponent]
})
export class PhotoModule {
}
