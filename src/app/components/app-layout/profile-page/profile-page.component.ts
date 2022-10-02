import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['../../../../styles/app-layout/profile-page/profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  currentUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.currentUser = this.userService.getLoggedUser();
  }
}
