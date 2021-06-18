import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DatePipe} from "@angular/common";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StartEndService {
  private REST_API_SERVER = "https://api.nasa.gov/planetary/apod?api_key=VUrpVsyC6Wbt0djJQ5LeQPTqViJXyOpoyftnJogT";
  startDateFormatted: any;
  endDateFormatted: any;

  constructor(private httpClient: HttpClient, private datePipe: DatePipe) {
  }

  public sendGetRequestStartEndDates(startDate: any, endDate: any): Observable<any> {
    this.startDateFormatted = this.datePipe.transform(startDate, 'yyyy-MM-dd');
    this.endDateFormatted = this.datePipe.transform(endDate, 'yyyy-MM-dd');
    // console.log('Start date formatted:', this.startDateFormatted);
    // console.log('End date formatted:', this.endDateFormatted);
    return this.httpClient.get<any>(
      this.REST_API_SERVER + '&start_date=' + this.startDateFormatted + '&end_date=' + this.endDateFormatted
    );
  }

  public getFirstApod(startDate: any): Observable<any> {
    // console.log('Start date:', this.startDateFormatted);
    return this.httpClient.get<any>(
      this.REST_API_SERVER + '&start_date=' + this.startDateFormatted + '&end_date=' + this.startDateFormatted
      // 'https://api.nasa.gov/planetary/apod?api_key=VUrpVsyC6Wbt0djJQ5LeQPTqViJXyOpoyftnJogT&start_date=2021-06-07&end_date=2021-06-11'
    );
  }
}

// https://api.nasa.gov/planetary/apod?api_key=VUrpVsyC6Wbt0djJQ5LeQPTqViJXyOpoyftnJogT&start_date=2021-06-07&end_date=2021-06-11
