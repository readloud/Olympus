import {Component, Input, OnInit} from '@angular/core';
import {Badge} from '../../../../../models/badge.model';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['../../../../../../styles/app-layout/profile-page/badge-article/badge/badge.component.scss']
})
export class BadgeComponent implements OnInit {
  @Input() badge: Badge;

  constructor() { }

  ngOnInit() {
  }

}
