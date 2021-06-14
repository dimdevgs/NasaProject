import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class StartEndService {
  private REST_API_SERVER = "https://api.nasa.gov/planetary/apod?api_key=VUrpVsyC6Wbt0djJQ5LeQPTqViJXyOpoyftnJogT";
  startDate: any = Date.now();
  endDate: any = Date.now();
  startDateFormatted: string | null | undefined;
  endDateFormatted: string | null | undefined;

  constructor(private httpClient: HttpClient, private datePipe: DatePipe) {
  }

  public sendGetRequestStartEndDates() {
    this.startDateFormatted = this.datePipe.transform(this.startDate, 'yyyy-MM-dd');
    this.endDateFormatted = this.datePipe.transform(this.endDate, 'yyyy-MM-dd');
    console.log('date formatted:', this.startDateFormatted);
    console.log('date formatted:', this.endDateFormatted);
    // console.log('http request:', this.REST_API_SERVER + '&start_date=' + this.startDateFormatted + '&end_date=' + this.endDateFormatted);
    return this.httpClient.get(this.REST_API_SERVER + '&start_date=' + this.startDateFormatted + '&end_date=' + this.endDateFormatted);
    // return this.httpClient.get(this.REST_API_SERVER + '&start_date=2021-06-01&end_date=2021-06-05');
  }
}
// https://api.nasa.gov/planetary/apod?api_key=VUrpVsyC6Wbt0djJQ5LeQPTqViJXyOpoyftnJogT&start_date=2021-06-07&end_date=2021-06-11
// https://api.nasa.gov/planetary/apod?api_key=VUrpVsyC6Wbt0djJQ5LeQPTqViJXyOpoyftnJogT&start_date=2021-06-17&end_date=2021-06-18
