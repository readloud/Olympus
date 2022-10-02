import { Component, OnInit } from '@angular/core';
import {PlayItem} from '../../../../../models/play-item.model';
import {PlaylistService} from '../../../../../services/playlist.service';

@Component({
  selector: 'app-play-items',
  templateUrl: './play-items.component.html',
  styleUrls: ['../../../../../../styles/app-layout/profile-page/playlist-article/play-items/play-items.component.scss']
})
export class PlayItemsComponent implements OnInit {
  playlist: PlayItem[];

  constructor(private playlistService: PlaylistService) { }

  ngOnInit() {
    this.playlist = this.playlistService.getPlaylist();
  }
}
