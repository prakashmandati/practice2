import { Component } from '@angular/core';
import { AdminService } from '../admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  email: string = '';
  password: string = '';
  response: string = '';

  constructor(private adminService: AdminService, private router: Router) {}

  
  login() {
        this.adminService.login(this.email, this.password)
      .subscribe(
        (response: any) => {
          if (response === 'Login successful.') {
            // Redirect to a different page or perform desired actions upon successful login
            this.router.navigate(['/admin-portal']);

            // Display "Login successful" message
            //this.response = 'Login successful.';
          } else {
            // Handle invalid credentials case
            this.response = 'Invalid credentials';
          }
        },
        error => {
          this.response = ' Invalid Login! Check Details. Please try again later.';
        }
      );
}



}



