export interface IReport {
  patient: string;
  date: string;
  time: string;
  hr: number;
  rr: number;
  bp: number;
  o2: number;
  glucose: number;
  urine: boolean;
  bowel: boolean;
  notes: string;
  signature: string;
}
