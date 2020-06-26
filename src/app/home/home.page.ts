import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public email:string;
  public senha:string;

  constructor(
    private router:Router,
    private auth:AuthService,
    private loadingCtrl:LoadingController,
    private toastCtrl:ToastController) {}

  async entrar(){
    
    const loading = await this.loadingCtrl.create({
      message: 'Acessando sistema...'
    });
    await loading.present();
    this.auth.authToken(this.email,this.senha).then((resolve:any)=>{
      loading.dismiss();
      this.showToastMessenger("Bem vindo "+resolve.user.name);
      this.router.navigateByUrl('options');
    }).catch((error)=>{
      if(error.status===0){
        this.showToastMessenger("Erro desconhecido!");
        loading.dismiss();
      }
      if(error.status===400){
        this.showToastMessenger("Usuário não encontrado!");
        loading.dismiss();
      }
      loading.dismiss();
    });
  }

  async showToastMessenger(message){
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
