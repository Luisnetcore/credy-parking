import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  FormsModule,
  ReactiveFormsModule
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
