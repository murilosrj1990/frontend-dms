import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudgetDetailPage } from './budget-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BudgetDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetDetailPageRoutingModule {}
