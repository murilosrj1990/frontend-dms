import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public email:string;
  public senha:string;

  constructor(private router:Router,private auth:AuthService) {}

  entrar(){
    this.auth.authToken(this.email,this.senha);
    this.router.navigateByUrl('options');

  }

}
