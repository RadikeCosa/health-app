import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css'],
})
export class ReportFormComponent {
  reportForm = new FormGroup({
    name: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    hour: new FormControl('', Validators.required),
    hr: new FormControl(''),
    br: new FormControl(''),
    bpSystolic: new FormControl(''),
    bpDiastolic: new FormControl(''),
    o2: new FormControl(''),
    glucose: new FormControl(''),
    bowel: new FormControl(''),
    urine: new FormControl(''),
    report: new FormControl('', Validators.required),
    indications: new FormControl(''),
    sign: new FormControl(''),
  });
  onSubmit() {
    if (this.reportForm.valid) {
      console.log(this.reportForm.value);
    }
  }
}
