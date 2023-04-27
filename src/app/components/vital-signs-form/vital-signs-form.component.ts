import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VitalSignsI } from 'src/app/utils/interfaces/vital-signs-i';

@Component({
  selector: 'app-vital-signs-form',
  templateUrl: './vital-signs-form.component.html',
  styleUrls: ['./vital-signs-form.component.css'],
})
export class VitalSignsFormComponent {
  vitalSignsForm: FormGroup;
  vitalSignsData: VitalSignsI = {
    name: '',
    date: '',
    time: '',
    hr: 0,
    rr: 0,
    bp: 0,
    o2: 0,
    glucose: 0,
    urine: false,
    bowel: false,
    notes: '',
    taker: '',
  };

  constructor(private formBuilder: FormBuilder) {
    this.vitalSignsForm = this.formBuilder.group({
      name: [this.vitalSignsData.name, Validators.required],
      date: [this.vitalSignsData.date, Validators.required],
      time: [this.vitalSignsData.time, Validators.required],
      hr: [this.vitalSignsData.hr, Validators.required],
      rr: [this.vitalSignsData.rr, Validators.required],
      bp: [this.vitalSignsData.bp, Validators.required],
      o2: [this.vitalSignsData.o2, Validators.required],
      glucose: [this.vitalSignsData.glucose, Validators.required],
      urine: [this.vitalSignsData.urine],
      bowel: [this.vitalSignsData.bowel],
      notes: [this.vitalSignsData.notes],
      taker: [this.vitalSignsData.taker],
    });
  }
}
