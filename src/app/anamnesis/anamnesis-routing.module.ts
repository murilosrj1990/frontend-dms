import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnamnesisPage } from './anamnesis.page';

const routes: Routes = [
  {
    path: '',
    component: AnamnesisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnamnesisPageRoutingModule {}
