import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpointAddress="http://104.197.179.103:8080";

  user:any;
  bearer_token:any;
  
  constructor(private http:HttpClient) { }

  async authToken(email,password){

    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );

    const options ={
      headers
    }

    return new Promise((resolve, reject)=>{
      var data ={
        email,
        password
      };

      this.http.post(this.endpointAddress+"/authenticate",data,options)
      .subscribe((result:any) =>{
        resolve(result);
        this.user=result.user;
        this.bearer_token=result.token;
      },
      async (error)=>{
        reject(error);
      })
    })
  }

  getToken(){
    return this.bearer_token;
  }

}
