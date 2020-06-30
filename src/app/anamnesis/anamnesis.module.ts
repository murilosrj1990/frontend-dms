import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnamnesisPageRoutingModule } from './anamnesis-routing.module';

import { AnamnesisPage } from './anamnesis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnamnesisPageRoutingModule
  ],
  declarations: [AnamnesisPage]
})
export class AnamnesisPageModule {}
