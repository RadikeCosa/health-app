import { Component, OnInit } from '@angular/core';
import { IPatient } from 'src/app/interfaces/ipatient';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent implements OnInit {
  patients: IPatient[] = [];

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.patientService.getPatients().subscribe((patients: IPatient[]) => {
      this.patients = patients;
      console.log(patients);
    });
  }

  deletePatient(id: number) {
    const patient = this.patients.find((p: IPatient) => p.id === id);
    if (
      patient &&
      confirm(
        `¿Está seguro de que desea eliminar a ${patient.name} ${patient.lastName}?`
      )
    ) {
      this.patientService.deletePatient(id).subscribe(() => {
        this.patients = this.patients.filter((p: IPatient) => p.id !== id);
      });
    }
  }
}
