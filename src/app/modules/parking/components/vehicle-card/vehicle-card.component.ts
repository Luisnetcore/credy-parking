import { Component, Input } from '@angular/core';
import { Vehicle } from '../../../../shared/model/Vehicle';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrl: './vehicle-card.component.scss'
})
export class VehicleCardComponent {

  @Input() vehicle?:Vehicle;

}
