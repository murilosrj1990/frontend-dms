import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  endpointAddress="http://104.197.179.103:8080";

  listBudgets;
  constructor(private http:HttpClient,private loading:LoadingController) { }

  async getBudgetsById(userId,token){


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
  
    console.log(`Bearer ${token}`);
    return new Promise((resolve, reject)=>{
      this.http.get(this.endpointAddress+"/users/"+userId+"/budgets",options)
      .subscribe((result:any) =>{
        resolve(result);
        this.listBudgets=result;
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
