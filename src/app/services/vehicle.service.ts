import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { vehicles } from '../../assets/server-mock/vehicles';
import { Vehicle } from '../shared/model/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }

  getVehicles(): Observable<Vehicle[]> {

    //esto simula a un llamado al api, ejemplo: return this.http.post<vehicles>(this.apiUrl, postData);
    return of(vehicles);
  }
}
