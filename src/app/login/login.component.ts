import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoggingService } from '../LogginService.service';
import { LoginServices } from './login.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginServices) { }

  ngOnInit() {
  }

  login(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.loginService.login(email,password);
  }
}
