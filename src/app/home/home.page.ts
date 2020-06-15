import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public email:string;
  public senha:string;

  constructor(private router:Router) {}

  entrar(){
    console.log(this.email, this.senha);
    this.router.navigateByUrl('options');

  }

}
