import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { ProcedureService } from '../procedure.service';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-budget-detail',
  templateUrl: './budget-detail.page.html',
  styleUrls: ['./budget-detail.page.scss'],
})
export class BudgetDetailPage implements OnInit {

  budgetId;
  budget_price:number=0;
  public procedures:Observable<any>;

  constructor(private route:ActivatedRoute, private service:ProcedureService,private auth:AuthService) { }

  ngOnInit() {
    this.buildList();
  }

  buildList(){
    this.route.params.subscribe((params: any) => {
      if (params['id']) { this.budgetId=  params['id'] }
    });

    this.service.getProceduresByBudgetId(this.budgetId,this.auth.bearer_token).then((resolve:any)=>{
      this.procedures=resolve;
      console.log(resolve)
      this.procedures.forEach(procedure => {
        this.budget_price=this.budget_price+procedure.price;
      });
    });
    
    
  }
}
