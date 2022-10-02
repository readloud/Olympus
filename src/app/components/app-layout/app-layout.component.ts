import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['../../../styles/app-layout/app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {
  @ViewChild('backToTop') sectionNeedToScroll: ElementRef;
  users: User[];
  currentUser: User;

  constructor(private userService: UserService, private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'background-layout');
  }

  ngOnInit() {
    this.currentUser = this.userService.getLoggedUser();
    this.users = this.userService.getActiveUsers();
  }

  public goToSection() {
    this.sectionNeedToScroll.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
