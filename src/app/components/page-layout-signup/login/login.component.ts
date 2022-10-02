import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../../styles/page-layout-signup/login/login.component.scss']
})
export class LoginComponent implements OnInit {
  user: FormGroup;

  constructor() { }

  ngOnInit() {
    this.user = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
}
