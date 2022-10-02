import { Component, OnInit } from '@angular/core';
import {ActorVote} from '../../../../../models/actor-vote.model';
import {VoteService} from '../../../../../services/vote.service';

@Component({
  selector: 'app-actor-votes',
  templateUrl: './actor-votes.component.html',
  styleUrls: ['../../../../../../styles/app-layout/profile-page/actor-vote-article/actor-votes/actor-votes.component.scss']
})
export class ActorVotesComponent implements OnInit {
  actorVoters: ActorVote[];

  constructor(private voteService: VoteService) { }

  ngOnInit() {
    this.actorVoters = this.voteService.getActorVoters();
  }
}
