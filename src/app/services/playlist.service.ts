import {Injectable} from '@angular/core';
import {PlayItem} from '../models/play-item.model';
import {PLAYLIST} from '../olympus.data';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  getPlaylist(): PlayItem[] {
    return PLAYLIST;
  }
}
