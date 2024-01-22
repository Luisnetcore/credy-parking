import { VehicleService } from '../../../../services/vehicle.service';
import { Times } from '../../../../shared/model/Times';
import { Vehicle } from '../../../../shared/model/Vehicle';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrl: './list-vehicles.component.scss'
})
export class ListVehiclesComponent implements OnInit {
  selectedTime?: string;
  times?:Times;

  vehicles?:Vehicle[];

  constructor(private vehicleService:VehicleService){
    this.times = new Times();
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

  searchByRange(): void{
    this.vehicleService.getByRangeDate().subscribe({
      next:(response:Vehicle[]) => {

        this.vehicles = response;

      }, error:() =>{
        //logica en caso de que exista un error o excepcion en el consumo del api
      }
    });
  }

}
