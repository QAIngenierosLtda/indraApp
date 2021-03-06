import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TratamientoDatosPageRoutingModule } from './tratamiento-datos-routing.module';

import { TratamientoDatosPage } from './tratamiento-datos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TratamientoDatosPageRoutingModule
  ],
  declarations: [TratamientoDatosPage]
})
export class TratamientoDatosPageModule {}
