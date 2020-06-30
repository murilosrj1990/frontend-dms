import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';

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

  constructor(
    private userService:UserService,
    private authService:AuthService,
    private router:Router,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController) { }

  async create(){
    const loading = await this.loadingCtrl.create({
      message: 'Criando usuário...'
    });
    await loading.present();
    this.userService.createUser(this.email,this.password,this.name,this.phone).then((resolve:any)=>{
      this.authService.authToken(this.email,this.password).then((res:any)=>{
      loading.dismiss();
      this.showToastMessenger("Bem vindo "+res.user.name);
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
    
      })
    }).catch((err)=>{
      if(err.status===0){
        this.showToastMessenger("Verifique sua conexão com a Internet, e tente novamente.");
        loading.dismiss();
      }
      if(err.status===400){
        this.showToastMessenger("Não foi possível criar o usuário!");
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

  ngOnInit() {
  }

}
