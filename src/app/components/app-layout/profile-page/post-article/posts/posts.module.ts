import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ArticleCardModule} from '../../../../../common/article-card/article-card.module';
import {PostsComponent} from './posts.component';
import {PostModule} from '../post/post.module';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PostModule,
    ArticleCardModule
  ],
  providers: [],
  exports: [PostsComponent]
})
 export class PostsModule {
}
