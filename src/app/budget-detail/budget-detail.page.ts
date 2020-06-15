import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-budget-detail',
  templateUrl: './budget-detail.page.html',
  styleUrls: ['./budget-detail.page.scss'],
})
export class BudgetDetailPage implements OnInit {

  budgetId;
  budget_price:number=0;
  budget:any={
    valid_at: "2020-07-02T02:05:48.080Z",
    createdAt: "2020-06-02T02:05:48.087Z",
    procedures: [{
      "id": 3,
      "tooth_number": 31,
      "name": "RESTAURACAO",
      "category": "GERAL",
      "price": 60.5,
      "createdAt": "2020-06-02T02:18:58.270Z",
      "updatedAt": "2020-06-02T02:18:58.270Z",
      "budget_id": 1
    },
    {
      "id": 4,
      "tooth_number": 31,
      "name": "RESTAURACAO",
      "category": "GERAL",
      "price": 50.9,
      "createdAt": "2020-06-02T21:30:33.150Z",
      "updatedAt": "2020-06-02T21:30:33.150Z",
      "budget_id": 1
    }]
}

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      if (params['id']) { this.budgetId=  params['id'] }
    });
    
    this.budget.procedures.forEach(procedure => {
      this.budget_price=this.budget_price+procedure.price;
      console.log(procedure.price);


    });
  }

}
