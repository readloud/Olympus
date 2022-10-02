import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-layout-signup',
  templateUrl: './page-layout-signup.component.html',
  styleUrls: ['../../../styles/page-layout-signup/page-layout-signup.component.scss']
})
export class PageLayoutSignupComponent implements OnInit, OnDestroy {

  constructor(private renderer: Renderer2, public router: Router) {
    this.renderer.addClass(document.body, 'background');
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'background');
  }
}
