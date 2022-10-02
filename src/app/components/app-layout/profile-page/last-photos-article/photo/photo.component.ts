import {Component, Input, OnInit} from '@angular/core';
import {Photo} from '../../../../../models/photo.model';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['../../../../../../styles/app-layout/profile-page/last-photos-article/photo/photo.component.scss']
})
export class PhotoComponent implements OnInit {
  @Input() photo: Photo;

  constructor() { }

  ngOnInit() {
  }

}
