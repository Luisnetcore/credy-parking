import { vehicles } from '../../assets/server-mock/vehicles';
import { Vehicle, VehicleRegister } from '../shared/model/Vehicle';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }

  getVehicles(): Observable<Vehicle[]> {

    //esto simula a un llamado al api, ejemplo: return this.http.get<vehicles[]>(this.apiUrl, postData);
    return of(vehicles);
  }

  getByRangeDate(): Observable<Vehicle[]> {

    // es aconsejable y buena práctica de que el backend se encargue de toda la lógica del negocio
    // y el frontend o del lado del cliente se encargue de mostrar los datos
    // y realizar logicas pertenencientes a la interfaz de usuario, animaciones etc,
    // separando responsabilidades especificas de toda una aplicación

    return of(vehicles);
  }

  liquidate(): Observable<boolean> {
    
    //esto simula a un llamado al api, ejemplo: return this.http.post<boolean>(this.apiUrl, postData);
    return of(true);
  }

  register(vehicle:VehicleRegister): Observable<boolean>{

     //esto simula a un llamado al api, ejemplo: return this.http.post<boolean>(this.apiUrl, vehicle);
    return of(true);
  }


}
