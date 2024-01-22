import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { globals } from '../../../../shared/constants/globals';
import { VehicleRegister } from '../../../../shared/model/Vehicle';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.scss'
})
export class FormRegisterComponent {

  @Output() registerEvent = new EventEmitter<VehicleRegister>();


  form: FormGroup;
  types?:string[];
  hour?:string;
  vehicle?:VehicleRegister;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      plaque: ['', Validators.required],
      time: ['', Validators.required],
      driver: this.fb.group({
        identification: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(6)]],
        names: ['', [Validators.required, Validators.pattern(/^[^\d]+$/)]],
    }),
      type: ['', Validators.required]
    });

    this.types = globals.TYPE_VEHICLE;
    this.form.patchValue(this.vehicle!);
  }

  handleSubmit() {
   
    console.log(this.form.value)

    this.registerEvent.emit(this.form.value);
  }
}
