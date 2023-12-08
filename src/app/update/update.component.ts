import { Component } from '@angular/core';
import { User } from '../user-model';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  userId: number;
  user: User;
  newPassword: string;

  constructor(private updateService: UpdateService) { }

  getUserDetails() {
    this.updateService.getUserById(this.userId).subscribe(data => {
      this.user = data;
    });
  }

  updateUser() {
    this.updateService.updateUserProfile(this.user).subscribe(response => {
      // Handle response or show a success message
      alert("User is updated succesfully")
    },error=>alert("Oops error occured"));
    
    }

    
}
