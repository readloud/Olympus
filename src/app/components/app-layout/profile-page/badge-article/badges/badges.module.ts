import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {BadgesComponent} from './badges.component';
import {BadgeModule} from '../badge/badge.module';
import {ArticleCardModule} from '../../../../../common/article-card/article-card.module';

@NgModule({
  declarations: [
    BadgesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BadgeModule,
    ArticleCardModule
  ],
  providers: [],
  exports: [BadgesComponent]
})
export class BadgesModule {
}
