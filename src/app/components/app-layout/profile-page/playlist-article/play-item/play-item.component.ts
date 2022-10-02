import {Component, Input, OnInit} from '@angular/core';
import {PlayItem} from '../../../../../models/play-item.model';

@Component({
  selector: 'app-play-item',
  templateUrl: './play-item.component.html',
  styleUrls: ['../../../../../../styles/app-layout/profile-page/playlist-article/play-item/play-item.component.scss']
})
export class PlayItemComponent implements OnInit {
  @Input() playitem: PlayItem;

  constructor() { }

  ngOnInit() {
  }
}
