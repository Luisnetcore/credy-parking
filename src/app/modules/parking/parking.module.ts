import { RegisterVehicleComponent } from './page/register-vehicle/register-vehicle.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { VehicleCardComponent } from './components/vehicle-card/vehicle-card.component';
import { ListVehiclesComponent } from './page/list-vehicles/list-vehicles.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ParkingComponent } from './page/parking/parking.component';
import { ParkingRoutingModule } from './parking-routing.module';
import { MaterialModule } from '../material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    ParkingComponent,
    RegisterVehicleComponent,
    ListVehiclesComponent,
    VehicleCardComponent,
    FormRegisterComponent
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
