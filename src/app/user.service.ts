import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  async createUser(email,password,name,phone){
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );

    const options ={
      headers
    }

    return new Promise((resolve, reject)=>{
      var data ={
        email,
        password,
        name,
        phone
      };

      this.http.post("http://localhost:3939/register",data,options)
      .subscribe((result:any) =>{
        resolve(result);
        return result;
      },
      async (error)=>{
        reject(error);
      })
    })
  }
}
