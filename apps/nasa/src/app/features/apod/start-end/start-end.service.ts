import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DatePipe} from "@angular/common";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

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
    // console.log('sendGetRequestStartEndDates Start Date:', startDate, typeof startDate);
    if (startDate === undefined || endDate === undefined) {
      startDate = Date.now();
      endDate = Date.now();
    }
    this.startDateFormatted = this.datePipe.transform(startDate, 'yyyy-MM-dd');
    this.endDateFormatted = this.datePipe.transform(endDate, 'yyyy-MM-dd');
    // console.log('Start date formatted:', this.startDateFormatted);
    // console.log('End date formatted:', this.endDateFormatted);
    return this.httpClient.get<any>(this.REST_API_SERVER + '&start_date=' + this.startDateFormatted + '&end_date=' + this.endDateFormatted)
      .pipe(
          catchError((err) => {
            console.error('This error is in service:', err);
            return throwError(err);
          })
        )
  }

  public getFirstApod(startDate: any): Observable<any> {
    // console.log('getFirstApod Start Date:', startDate, typeof startDate);
    if (startDate === undefined) {
      startDate = Date.now();
    }
    this.startDateFormatted = this.datePipe.transform(startDate, 'yyyy-MM-dd');
    return this.httpClient.get<any>(this.REST_API_SERVER + '&start_date=' + this.startDateFormatted + '&end_date=' + this.startDateFormatted)
      .pipe(
        catchError((err) => {
          console.error('This error is in service:', err);
          return throwError(err);
        })
      )
  }
}

// https://api.nasa.gov/planetary/apod?api_key=VUrpVsyC6Wbt0djJQ5LeQPTqViJXyOpoyftnJogT&start_date=2021-06-07&end_date=2021-06-11
