import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-parking';

  constructor(private translateService: TranslateService, private router:Router){
    translateService.setDefaultLang('es');
    translateService.use('es');
  }

  navigateMenu():void{
    this.router.navigate(['']);
  }

}

