import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParkingRoutingModule } from './parking-routing.module';
import { MaterialModule } from '../material/material.module';
import { MatButtonModule } from '@angular/material/button';
import { ParkingComponent } from './page/parking/parking.component';


@NgModule({
  declarations: [
    ParkingComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    ParkingRoutingModule
  ]
})
export class ParkingModule { }
