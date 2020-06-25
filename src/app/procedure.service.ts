import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  listProcedures;

  constructor(private http:HttpClient,private loading:LoadingController) { }

  async getProceduresByBudgetId(budgetId,token){
    var load = await this.loading.create({
      message: 'Carregando os dados...'
    });
    await load.present();

    

    var headers = new HttpHeaders().append('Accept', 'application/json')
    .append('Content-Type', 'application/json' )
    .append('Authorization',`Bearer ${token}`);

    const options ={
      headers
    }
  
    return new Promise((resolve, reject)=>{
      this.http.get("http://localhost:3939/budgets/"+budgetId+"/procedures",options)
      .subscribe((result:any) =>{
        resolve(result);
        this.listProcedures=result;
        load.dismiss();
        return result;
      },
      async (error)=>{
        reject(error);
        load.dismiss();
      })
    })
  }
}
