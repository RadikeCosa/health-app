import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPatient } from 'src/app/interfaces/ipatient';
@Injectable({
  providedIn: 'root',
})
export class PatientService {
  apiUrl = 'https://healthapi-awns.onrender.com/api/v1';
  constructor(private http: HttpClient) {}

  getPatients(): Observable<IPatient[]> {
    return this.http.get<IPatient[]>(`${this.apiUrl}/patients`);
  }
  createPatient(patient: IPatient): Observable<IPatient> {
    return this.http.post<IPatient>(`${this.apiUrl}/patients`, patient);
  }
  deletePatient(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/patients/${id}`);
    console.log('servicio funcionando en eliminacion');
  }

  updatePatient(patient: IPatient): Observable<IPatient> {
    return this.http.put<IPatient>(
      `${this.apiUrl}/patients/${patient.id}`,
      patient
    );
  }
}
