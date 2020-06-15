import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BudgetDetailPageRoutingModule } from './budget-detail-routing.module';

import { BudgetDetailPage } from './budget-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BudgetDetailPageRoutingModule
  ],
  declarations: [BudgetDetailPage]
})
export class BudgetDetailPageModule {}
