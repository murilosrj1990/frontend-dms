import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListAnamnesisPageRoutingModule } from './list-anamnesis-routing.module';

import { ListAnamnesisPage } from './list-anamnesis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListAnamnesisPageRoutingModule
  ],
  declarations: [ListAnamnesisPage]
})
export class ListAnamnesisPageModule {}
