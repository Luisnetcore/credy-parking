import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { globals } from '../../../../shared/constants/globals';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.scss'
})
export class FormRegisterComponent {
  formulario: FormGroup;
  types?:string[];
  hour?:string;

  constructor(private fb: FormBuilder) {

    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      edad: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.types = globals.TYPE_VEHICLE;
    
  }

  handleSubmit() {
    // if (this.formulario.valid) {
    //   console.log('Datos del formulario:', this.formulario.value);
    //   this.formulario.reset();
    // }
    console.log("click")
  }
}
