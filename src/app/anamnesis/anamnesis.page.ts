import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-anamnesis',
  templateUrl: './anamnesis.page.html',
  styleUrls: ['./anamnesis.page.scss'],
})
export class AnamnesisPage implements OnInit {

  anamneseId;

  constructor(private route:ActivatedRoute,
    private auth:AuthService) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      if (params['id']) { this.anamneseId=  params['id'] }
    });
  }

}
