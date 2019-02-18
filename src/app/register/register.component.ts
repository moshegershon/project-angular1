import { Component, OnInit } from '@angular/core';
import { userModel } from './models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userModel: userModel;

  constructor() {
    this.userModel = <userModel>{};
   }

  ngOnInit() {
  }
  register(){
    console.log(this.userModel)
  }

}
