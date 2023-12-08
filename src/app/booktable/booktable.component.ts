import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TableRegisterService } from '../tableregister.service';

@Component({
  selector: 'app-booktable',
  templateUrl: './booktable.component.html',
  styleUrls: ['./booktable.component.css'],
  styles: [
    `
    :host {
      display: block;
      background-color: #beef00;
    }
    `,
  ],
})
export class BooktableComponent {
  user: any = {};

  constructor(private userService: TableRegisterService, private router: Router) {}

  userRegister(): void {
    console.log(this.user);

    if (this.isAllDataFilled()) {
      this.userService.registerUser(this.user).subscribe(
        (response) => {
          
          alert('Successfully booked!');
         
        },
        () => {
          alert('Sorry, booking failed.');
        }
      );
    } else {
      alert('Please fill in all required fields.');
    }
  }

  private isAllDataFilled(): boolean {
    return (
      this.user.name &&
      this.user.email &&
      this.user.tableColumn &&
      this.user.date &&
      this.user.time
      // Add more conditions for other required fields
    );
  }
}
