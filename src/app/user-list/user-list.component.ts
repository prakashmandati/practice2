import { Component, OnInit } from '@angular/core';
import { TableRegisterService } from '../tableregister.service';
import { UserModel } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: UserModel[] = [];

  constructor(private userService: TableRegisterService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

  confirmUser(userId: number): void {
    this.userService.confirmUser(userId).subscribe(() => {
      this.loadUsers();
    });
  }

  denyUser(userId: number): void {
    this.userService.denyUser(userId).subscribe(() => {
      this.loadUsers();
    });
  }

 
}
