import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListAnamnesisPage } from './list-anamnesis.page';

const routes: Routes = [
  {
    path: '',
    component: ListAnamnesisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListAnamnesisPageRoutingModule {}
