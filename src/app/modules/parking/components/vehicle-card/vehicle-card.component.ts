import Swal from 'sweetalert2';
import { globals } from '../../../../shared/constants/globals';
import { Vehicle } from '../../../../shared/model/Vehicle';
import { Component, Input, OnInit } from '@angular/core';
import { VehicleService } from '../../../../services/vehicle.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrl: './vehicle-card.component.scss'
})
export class VehicleCardComponent implements OnInit{

  @Input() vehicle?:Vehicle;
  public icon?:string;

  constructor(private vehicleService:VehicleService, private translate:TranslateService){

  }

  ngOnInit(): void {
    this.selectIcon();
  }

  private selectIcon() : void{
    this.icon = `../../../../../assets/image/${globals.ICON_TYPE.find(t => t.type == this.vehicle?.type)?.icon}`;
  }

  public liquidate():void{

    this.vehicleService.liquidate().subscribe({
      next: (response:boolean) => {

        if(response){
          Swal.fire({
            text: this.translate.instant('LIQUIDATE_OK'),
            icon: 'success',
            confirmButtonText: this.translate.instant('ACCEPT'),
          }).then((result) => {
            if (result.isConfirmed) {
            }
          });
        }else{

          //esto es un ejemplo, solo por dar una simulación de error
          Swal.fire({
            text: this.translate.instant('LIQUIDATE_OK'),
            icon: 'error',
            confirmButtonText: this.translate.instant('ACCEPT'),
          }).then((result) => {
            if (result.isConfirmed) {
            }
          });
        }

      }
    })


  }

}
