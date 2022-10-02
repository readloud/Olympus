import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ActorVotesComponent} from './actor-votes.component';
import {ActorVoteModule} from '../actor-vote/actor-vote.module';
import {ArticleCardModule} from '../../../../../common/article-card/article-card.module';

@NgModule({
  declarations: [
    ActorVotesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ActorVoteModule,
    ArticleCardModule
  ],
  providers: [],
  exports: [ActorVotesComponent]
})
export class ActorVotesModule {
}
