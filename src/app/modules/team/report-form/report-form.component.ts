import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { IPatient } from 'src/app/models/ipatient';
import { IReportFormData } from 'src/app/models/ireportformdata';
import { PatientService } from '../../admin/services/patient.service';
import { ReportFormService } from '../services/report-form.service';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css'],
})
export class ReportFormComponent {
  patients: IPatient[] = [];
  reportForm: FormGroup;
  reportFormData: IReportFormData = {
    name: '',
    date: '',
    hour: '',
    bpSystolic: '',
    bpDiastolic: '',
    hr: '',
    rr: '',
    temp: '',
    o2: '',
    glucose: '',
    urine: false,
    bowel: false,
    report: '',
    indications: '',
    signature: '',
  };
  constructor(
    private fb: FormBuilder,
    private patientService: PatientService,
    private reportFormServics: ReportFormService
  ) {
    this.reportForm = this.fb.group({
      name: [this.reportFormData.name, Validators.required],
      date: [this.reportFormData.date, Validators.required],
      hour: [this.reportFormData.hour, Validators.required],
      bpSystolic: [this.reportFormData.bpSystolic],
      bpDiastolic: [this.reportFormData.bpDiastolic],
      hr: [this.reportFormData.hr],
      rr: [this.reportFormData.rr],
      o2: [this.reportFormData.o2],
      temp: [this.reportFormData.temp],
      glucose: [this.reportFormData.glucose],
      urine: [this.reportFormData.urine],
      bowel: [this.reportFormData.bowel],
      report: [this.reportFormData.report],
      indications: [this.reportFormData.indications],
      signature: [this.reportFormData.signature],
    });
  }
  ngOnInit() {
    this.patientService.getPatients().subscribe((patients) => {
      this.patients = patients;
    });
  }
  onSubmit() {
    if (this.reportForm.valid) {
      const formData: any = this.reportForm.value;
      this.reportFormServics.sendReport(formData).subscribe(
        (response) => {
          console.log(response);
          // reiniciar el formulario
          this.reportForm.reset(this.reportFormData);
          // mostrar un mensaje de confirmación
          alert('El reporte se envió exitosamente');
        },
        (error) => {
          console.log(error);
          // mostrar un mensaje de error
          alert('Ocurrió un error al enviar el reporte');
        }
      );
    }
  }
}
