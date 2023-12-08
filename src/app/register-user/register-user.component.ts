import { Component } from '@angular/core';

import { RegisterService } from '../register-service.service';
import { User } from '../user-model';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  user : User = new User();

  constructor(private registerService : RegisterService) { }

  userRegister()
  {
    console.log(this.user);
    this.registerService.registerUser(this.user).subscribe(data =>{
      alert("User is registered succesfully")
    },error=>alert("Oops error occured"));
    

    }
  }


