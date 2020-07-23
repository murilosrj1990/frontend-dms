import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  
  endpointAddress = "http://10.0.0.11:8080";
  fileTransfer:FileTransferObject

  constructor(
    private auth: AuthService,
    private fileChooser: FileChooser,
    private transfer:FileTransfer,
    private filePath:FilePath) { }

  user;
  userProfilePathImage;
  uploadFileProfile: File;


  async upload() {
    let user_id=this.auth.user.id;
    let token = this.auth.bearer_token;

    this.fileChooser.open().then((uri) => {

      this.fileTransfer = this.transfer.create();
      let options: FileUploadOptions = {
        fileKey: 'file',
        fileName: `profile-${user_id}.png`,
        headers: {
          'Accept': '*/*',
          'Authorization': `Bearer ${token}`
        }
      }

      this.filePath.resolveNativePath(uri).then((nativepath) => {
        this.fileTransfer.upload(nativepath, `${this.endpointAddress}/users/${user_id}/upload`, options).then((data) => {
          this.userProfilePathImage=`${this.auth.user.profile_img}?time=`+Date.now();
        }, (err) => {
          console.log(err);
        })
      }, (err) => {
        console.log(err);
      })
    }, (err) => {
      alert("Não foi possível fazer Upload da Imagem!");
    })

  }



  ngOnInit() {
    this.user = this.auth.user;
    this.userProfilePathImage = `${this.auth.user.profile_img}?time=` + Date.now();
  }

  ionViewWillEnter() {
    this.user = this.auth.user;
    this.userProfilePathImage = `${this.auth.user.profile_img}?time=` + Date.now();
  }

}
