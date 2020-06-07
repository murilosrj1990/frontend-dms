import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  create(){
    console.log(this.name,this.email,this.phone,this.password, this.confirm_password);
  }

  ngOnInit() {
  }

}
