import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NgModule } from '@angular/core';


const materialModules = [
  MatButtonModule,
  MatCardModule
];

@NgModule({
  declarations: [
  ],
  imports: [
    materialModules,
  ],
  exports:[
    materialModules
  ]
})
export class MaterialModule { }
