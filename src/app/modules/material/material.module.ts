import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  FormsModule
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
