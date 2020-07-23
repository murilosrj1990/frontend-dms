import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  fileTransfer:FileTransferObject;

  endpointAddress = "http://10.0.0.11:8080";
  constructor(private http: HttpClient, private transfer: FileTransfer, private filePath:FilePath) { }

  async upload(uri:string,token:string,user_id) {
    this.fileTransfer = this.transfer.create();
    let options:FileUploadOptions={
      fileKey: 'file',
      fileName: `profile-${user_id}.png`,
      headers: {
        'Accept' : '*/*',
        'Authorization' : `Bearer ${token}`
      }
    }

    this.filePath.resolveNativePath(uri).then((nativepath)=>{
      console.log("Path: "+nativepath+", Token: " +token+", Id: "+user_id+", Options: "+options);
      this.fileTransfer.upload(nativepath,`${this.endpointAddress}/users/${user_id}/upload`,options).then((data:any)=>{
        console.log(data.response);
      },(err)=>{
        console.log(err);
      })
    },(err)=>{
      console.log(err);
    })
  }

  async createUser(email, password, name, phone) {
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');

    const options = {
      headers
    }

    return new Promise((resolve, reject) => {
      var data = {
        email,
        password,
        name,
        phone
      };

      this.http.post(this.endpointAddress + "/register", data, options)
        .subscribe((result: any) => {
          resolve(result);
          return result;
        },
          async (error) => {
            reject(error);
          })
    })
  }
}
