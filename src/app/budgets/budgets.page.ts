import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.page.html',
  styleUrls: ['./budgets.page.scss'],
})
export class BudgetsPage implements OnInit {

  public budgetList = [];

  constructor(private router:Router) {
    this.buildList();
   }

  ngOnInit() {
  }

  tratamentoStringData(data) {
    let tratString = data;
    let array = tratString.split("/");
    return array;
  }

  buildList() {

    for (let i = 0; i <= 7; i++) {
      const newBudget = {
        id: (Math.round((Math.random() * 10) ) ),
        price: 0.0,
        createdAt: new Date().toLocaleDateString(),
        procedures: [{}, {}]
      }

      this.budgetList.push(newBudget);
    }

  }

  refresh(){
    console.log("Lista atualizada.")
  }

  openBudgetDetail(budget_id){
    console.log(budget_id);
    this.router.navigateByUrl('/budget-detail/'+budget_id);
    
  }

}
