import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ActorVoteComponent} from './actor-vote.component';
import {ProgressBarModule} from '../../../../../common/progress-bar/progress-bar.module';

@NgModule({
  declarations: [
    ActorVoteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ProgressBarModule
  ],
  providers: [],
  exports: [ActorVoteComponent]
})
export class ActorVoteModule {
}
