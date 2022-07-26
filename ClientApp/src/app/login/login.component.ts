import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public router: Router) {  }
  userName = '';
  passWord = '';
  ngOnInit() {
  }

  validate() {
    var isValidUserName = this.userName  == 'Admin'
    var isValidPassword = this.passWord == 'Pass@123';

    if (isValidUserName && isValidPassword) {
      this.router.navigateByUrl('home');
    }
    else {
      this.userName = '';
      this.passWord = '';
      window.alert("Enter valid userName or password...")
      this.router.navigateByUrl('');
    }
  }
}
