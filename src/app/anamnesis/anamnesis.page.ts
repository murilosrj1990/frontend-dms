import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { AnamneseService } from '../anamnese.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-anamnesis',
  templateUrl: './anamnesis.page.html',
  styleUrls: ['./anamnesis.page.scss'],
})
export class AnamnesisPage implements OnInit {

  anamneseId;
  anamnese:Observable<any>;

  constructor(private route:ActivatedRoute,
    private auth:AuthService,
    private anamneseService:AnamneseService) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      if (params['id']) { this.anamneseId=  params['id'] };

    });


    this.getAnamneseById(this.anamneseId,this.auth.bearer_token);
    this.anamnese = this.anamneseService.anamnese;
  }

 

  getAnamneseById(id,token){
    this.anamneseService.getAnamenseById(id,token).then((resolve:any)=>{
      this.anamnese=resolve;
      console.log(resolve);
    });
  }

}
