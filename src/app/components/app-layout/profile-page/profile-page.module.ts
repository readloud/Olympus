import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ProfilePageComponent} from './profile-page.component';
import {BadgesModule} from './badge-article/badges/badges.module';
import {PlayItemsModule} from './playlist-article/play-items/play-items.module';
import {PhotosModule} from './last-photos-article/photos/photos.module';
import {ActorVotesModule} from './actor-vote-article/actor-votes/actor-votes.module';
import {PostsModule} from './post-article/posts/posts.module';

@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BadgesModule,
    PlayItemsModule,
    PhotosModule,
    ActorVotesModule,
    PostsModule
  ],
  providers: [],
  exports: [ProfilePageComponent]
})
export class ProfilePageModule {
}
