import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IReportFormData } from 'src/app/models/ireportformdata';

@Injectable({
  providedIn: 'root',
})
export class ReportFormService {
  apiUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  sendReport(reportFormData: IReportFormData) {
    return this.http.post(`${this.apiUrl}/reports`, reportFormData);
  }
}
