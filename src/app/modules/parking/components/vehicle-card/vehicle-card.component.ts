import { globals } from '../../../../shared/constants/globals';
import { Vehicle } from '../../../../shared/model/Vehicle';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrl: './vehicle-card.component.scss'
})
export class VehicleCardComponent implements OnInit{

  @Input() vehicle?:Vehicle;
  public icon?:string;

  ngOnInit(): void {
    this.selectIcon();
  }

  private selectIcon() : void{
    console.log(globals.ICON_TYPE.find(t => t.icon == this.vehicle?.type)?.icon)
    this.icon = `../../../../../assets/image/${globals.ICON_TYPE.find(t => t.type == this.vehicle?.type)?.icon}`;
  }

}
