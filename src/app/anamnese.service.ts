import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AnamneseService {
  endpointAddress="http://104.197.179.103:8080";

  anamnese;
  anamnesisList;

  constructor(
    private loading:LoadingController,
    private http:HttpClient
  ) { }

  async listAnamnesis(userId,token){

    var load = await this.loading.create({
      cssClass: 'my-custom-class',
      message: 'Carregando os dados...',
      duration: 2000
    });
    await load.present();

    

    var headers = new HttpHeaders().append('Accept', 'application/json')
    .append('Content-Type', 'application/json' )
    .append('Authorization',`Bearer ${token}`);

    const options ={
      headers
    }
  
    return new Promise((resolve, reject)=>{
      this.http.get(this.endpointAddress+"/users/"+userId+"/anamnesis",options)
      .subscribe((result:any) =>{
        resolve(result);
        load.dismiss();
        this.anamnesisList=result;
        return result.rows;
      },
      async (error)=>{
        reject(error);
        load.dismiss();
        console.log(error);
      })
    })

  }

  async getAnamenseById(id,token){


    var load = await this.loading.create({
      cssClass: 'my-custom-class',
      message: 'Carregando os dados...',
      duration: 2000
    });
    await load.present();

    

    var headers = new HttpHeaders().append('Accept', 'application/json')
    .append('Content-Type', 'application/json' )
    .append('Authorization',`Bearer ${token}`);

    const options ={
      headers
    }
  
    return new Promise((resolve, reject)=>{
      this.http.get(this.endpointAddress+"/anamnesis/"+id,options)
      .subscribe((result:any) =>{
        resolve(result);
        this.anamnese=result;
        load.dismiss();
        return result;
      },
      async (error)=>{
        reject(error);
        load.dismiss();
        console.log(error);
      })
    })
  }
}
