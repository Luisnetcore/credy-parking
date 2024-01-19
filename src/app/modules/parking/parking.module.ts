import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingRoutingModule } from './parking-routing.module';
import { MaterialModule } from '../material/material.module';
import { ParkingComponent } from './page/parking/parking.component';
import { TranslateModule } from '@ngx-translate/core';
import { RegisterVehicleComponent } from './components/register-vehicle/register-vehicle.component';


@NgModule({
  declarations: [
    ParkingComponent,
    RegisterVehicleComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    ParkingRoutingModule,
    TranslateModule.forChild()
  ]
})
export class ParkingModule { }
