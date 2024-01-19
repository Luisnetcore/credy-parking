import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-parking';

  constructor(private translateService: TranslateService){
    translateService.setDefaultLang('es');
    translateService.use('es');
  }
}
