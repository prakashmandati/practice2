import { Component } from '@angular/core';
import { User } from '../user-model';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  userId: number;
  user: User;
  newPassword: string;

  constructor(private updateService: UpdateService) { }

  getUserDetails() {
    this.updateService.getUserById(this.userId).subscribe(data => {
      this.user = data;
    });
  }

  
    changePassword() {
      this.updateService.changeUserPassword(this.userId, this.newPassword).subscribe(response => {
        // Handle response or show a success message
        alert("Password is changed successfully");
        this.newPassword = ''; // Clear the new password input
      }, error => {
        alert("Oops, an error occurred while changing the password.");
      });
    }


}
