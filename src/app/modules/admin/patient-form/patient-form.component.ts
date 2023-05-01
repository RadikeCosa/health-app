import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPatient } from 'src/app/interfaces/ipatient';
import { PatientService } from '../services/patient.service';
@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css'],
})
export class PatientFormComponent {
  patientForm: FormGroup;

  constructor(private fb: FormBuilder, private patientService: PatientService) {
    this.patientForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      os: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      diagnosis: ['', Validators.required],
      image: [''],
      isActive: [true],
    });
  }

  createPatient(): void {
    const newPatient: IPatient = {
      ...this.patientForm.value,
      id: 0, // The API will assign the ID
    };
    this.patientService.createPatient(newPatient).subscribe(
      (patient) => {
        console.log(patient);
        this.patientForm.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
