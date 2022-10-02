import {Component, Input, OnInit} from '@angular/core';
import {ActorVote} from '../../../../../models/actor-vote.model';

@Component({
  selector: 'app-actor-vote',
  templateUrl: './actor-vote.component.html',
  styleUrls: ['../../../../../../styles/app-layout/profile-page/actor-vote-article/actor-vote/actor-vote.component.scss']
})
export class ActorVoteComponent implements OnInit {
  @Input() actorVote: ActorVote;

  constructor() { }

  ngOnInit() {
  }
}
