import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingRoutingModule } from './parking-routing.module';
import { MaterialModule } from '../material/material.module';
import { ParkingComponent } from './page/parking/parking.component';
import { TranslateModule } from '@ngx-translate/core';
import { RegisterVehicleComponent } from './components/register-vehicle/register-vehicle.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ListVehiclesComponent } from './components/list-vehicles/list-vehicles.component';


@NgModule({
  declarations: [
    ParkingComponent,
    RegisterVehicleComponent,
    ListVehiclesComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    ParkingRoutingModule,
    NgxMaterialTimepickerModule,
    TranslateModule.forChild()
  ]
})
export class ParkingModule { }
