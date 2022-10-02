import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {PostComponent} from './post.component';

@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  exports: [PostComponent]
})
export class PostModule {
}
