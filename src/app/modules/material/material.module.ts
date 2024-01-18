import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';


const materialModules = [
  MatButtonModule
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
