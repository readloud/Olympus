import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {PhotosComponent} from './photos.component';
import {PhotoModule} from '../photo/photo.module';
import {ArticleCardModule} from '../../../../../common/article-card/article-card.module';

@NgModule({
  declarations: [
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PhotoModule,
    ArticleCardModule
  ],
  providers: [],
  exports: [PhotosComponent]
})
export class PhotosModule {
}
