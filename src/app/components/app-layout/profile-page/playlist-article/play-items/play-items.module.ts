import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {PlayItemsComponent} from './play-items.component';
import {PlayItemModule} from '../play-item/play-item.module';
import {ArticleCardModule} from '../../../../../common/article-card/article-card.module';

@NgModule({
  declarations: [
    PlayItemsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PlayItemModule,
    ArticleCardModule
  ],
  providers: [],
  exports: [PlayItemsComponent]
})
export class PlayItemsModule {
}
