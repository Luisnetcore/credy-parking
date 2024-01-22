import { Component } from '@angular/core';
import { VehicleRegister } from '../../../../shared/model/Vehicle';
import { VehicleService } from '../../../../services/vehicle.service';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register-vehicle',
  templateUrl: './register-vehicle.component.html',
  styleUrl: './register-vehicle.component.scss'
})
export class RegisterVehicleComponent {

  constructor(private vehicleService:VehicleService, private translate: TranslateService){}

  register(vehicle:VehicleRegister){
    this.vehicleService.register(vehicle).subscribe({
      next:(response: boolean) => {
        if(response){
          Swal.fire({
            text: this.translate.instant('REGISTER_OK'),
            icon: 'success',
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
