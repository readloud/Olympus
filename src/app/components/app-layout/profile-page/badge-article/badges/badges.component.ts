import { Component, OnInit } from '@angular/core';
import {Badge} from '../../../../../models/badge.model';
import {BadgeService} from '../../../../../services/badge.service';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['../../../../../../styles/app-layout/profile-page/badge-article/badges/badges.component.scss']
})
export class BadgesComponent implements OnInit {
  badges: Badge[];

  constructor(private badgeService: BadgeService) { }

  ngOnInit() {
    this.badges = this.badgeService.getBadges();
  }
}
