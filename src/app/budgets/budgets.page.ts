import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from '../budget.service';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.page.html',
  styleUrls: ['./budgets.page.scss'],
})
export class BudgetsPage implements OnInit {

  public budgetList:Observable<any>;

  constructor(private router:Router,
    private budgetService:BudgetService,
    private auth:AuthService) {
   }

  ngOnInit(){
    this.buildList();
  }

  tratamentoStringData(data) {
    let tratString = data;
    let array = tratString.split("/");
    return array;
  }

  buildList() {
    console.log(this.auth.user.id,this.auth.bearer_token);
    let userId = this.auth.user.id;
    let token = this.auth.bearer_token;
    this.budgetService.getBudgetsById(userId,token).then((resolve:any)=>{
        this.budgetList = resolve;
    })

  }



  refresh(){
    let userId = this.auth.user.id;
    let token = this.auth.bearer_token;
    this.budgetService.getBudgetsById(userId,token).then((resolve:any)=>{
        this.budgetList = resolve;
    })
  }

  openBudgetDetail(budget_id){
    this.router.navigateByUrl('/budget-detail/'+budget_id);
  }
  
  removeBudget(){
    
  }

}
