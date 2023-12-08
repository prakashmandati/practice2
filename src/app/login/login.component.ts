import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailId: string = '';
  password: string = '';
  response: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  
  login() {
    this.loginService.login(this.emailId, this.password)
      .subscribe(
        (response: any) => {
          if (response === 'Login successful') {
            
            this.router.navigate(['/welcome']);
          } else {
            
            this.response = 'Invalid credentials';
          }
        },
        error => {
          this.response = ' Please check the email or password';
        }
      );

}

}