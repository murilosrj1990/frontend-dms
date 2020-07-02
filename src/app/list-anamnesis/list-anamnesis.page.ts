import { Component, OnInit } from '@angular/core';
import { AnamneseService } from '../anamnese.service';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-anamnesis',
  templateUrl: './list-anamnesis.page.html',
  styleUrls: ['./list-anamnesis.page.scss'],
})
export class ListAnamnesisPage implements OnInit {

  listAnamnesis:Observable<any>;

  constructor(
    private anamneseService:AnamneseService,
    private authService:AuthService,
    private route:Router
  ) { }

  ngOnInit() {
    this.buildList();
  }

  buildList(){
    let userId=this.authService.user.id;
    let token=this.authService.bearer_token;
    this.anamneseService.listAnamnesis(userId,token).then((res:any)=>{
      this.listAnamnesis=res.rows;
    });
  }

  openDetailAnamnese(id){
    this.route.navigateByUrl("/anamnesis/"+id);
  }
}
