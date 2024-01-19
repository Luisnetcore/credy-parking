import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../../../services/vehicle.service';
import { Vehicle } from '../../../../shared/model/Vehicle';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrl: './list-vehicles.component.scss'
})
export class ListVehiclesComponent implements OnInit {
  selectedTime?: string;

  vehicles?:Vehicle[];

  constructor(private vehicleService:VehicleService){
    
  }

  ngOnInit(): void {
    this.getVehicles();
  }

  getVehicles() : void{
    this.vehicleService.getVehicles().subscribe({
      next:(response:Vehicle[]) => {

        this.vehicles = response;

      }, error:() =>{
        //logica en caso de que exista un error o excepcion en el consumo del api
      }
    });
  }

}
