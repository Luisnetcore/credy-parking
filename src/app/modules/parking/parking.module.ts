import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingRoutingModule } from './parking-routing.module';
import { MaterialModule } from '../material/material.module';
import { ParkingComponent } from './page/parking/parking.component';
import { TranslateModule } from '@ngx-translate/core';
import { RegisterVehicleComponent } from './page/register-vehicle/register-vehicle.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ListVehiclesComponent } from './page/list-vehicles/list-vehicles.component';
import { VehicleCardComponent } from './components/vehicle-card/vehicle-card.component';
import { TimeElapsedPipe } from '../../shared/pipe/time-elapsed.pipe';


@NgModule({
  declarations: [
    ParkingComponent,
    RegisterVehicleComponent,
    ListVehiclesComponent,
    VehicleCardComponent,
    TimeElapsedPipe
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
