import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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

      this.http.post("http://localhost:3939/authenticate",data,options)
      .subscribe((result:any) =>{
        resolve(result);
        this.user=result.user;
        this.bearer_token=result.token;
      },
      async (error)=>{
        reject(error.json());
      })
    })
  }

  getId(){
    return this.user.id;
  }

  getName(){
    return this.user.name;
  }

  getPhone(){
    return this.user.phone;
  }

  getEmail(){
    return this.user.email;
  }
}
