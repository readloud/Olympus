import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ArticleCardComponent} from './article-card.component';

@NgModule({
  declarations: [
    ArticleCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  exports: [ArticleCardComponent]
})
export class ArticleCardModule {
}
