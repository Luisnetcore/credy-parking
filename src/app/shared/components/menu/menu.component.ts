import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  constructor(private router: Router){}

  navigate(option:number){

    switch(option){
      case 1:
        this.router.navigate(['/dashboard/credy-parking']);
        break;
      case 2:
        this.router.navigate(['/dashboard/credy-parking/vehiculos']);
        break;
    }

  }

}
