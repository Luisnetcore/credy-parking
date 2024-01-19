import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkingComponent } from './page/parking/parking.component';
import { RegisterVehicleComponent } from './page/register-vehicle/register-vehicle.component';
import { ListVehiclesComponent } from './page/list-vehicles/list-vehicles.component';

const routes: Routes = [
  {path:'', component : ParkingComponent},
  {path:'registrar', component: RegisterVehicleComponent},
  {path:'listar', component: ListVehiclesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingRoutingModule { }
