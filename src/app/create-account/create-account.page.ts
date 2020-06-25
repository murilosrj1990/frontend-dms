import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  public name:string;
  public email:string;
  public phone:string;
  public password:string;
  public confirm_password:string;

  constructor(private userService:UserService,private authService:AuthService,private router:Router) { }

  create(){
    this.userService.createUser(this.email,this.password,this.name,this.phone).then((resolve:any)=>{
      this.authService.authToken(this.email,this.password).then((res:any)=>{

      this.router.navigateByUrl('options');
      })
    })
  }

  ngOnInit() {
  }

}
