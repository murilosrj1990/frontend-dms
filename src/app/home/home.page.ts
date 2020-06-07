import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public email:string;
  public senha:string;

  constructor() {}

  entrar(){
    console.log(this.email, this.senha);
  }

}
