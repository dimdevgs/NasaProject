import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from "@angular/common";
import {Observable} from "rxjs";
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class StartEndService {
  private REST_API_SERVER = "https://api.nasa.gov/planetary/apod?api_key=VUrpVsyC6Wbt0djJQ5LeQPTqViJXyOpoyftnJogT";
  startDateService: any;
  endDateService: any;
  startDateFormatted: any;
  endDateFormatted: any;

  constructor(private httpClient: HttpClient, private datePipe: DatePipe) {
  }

  dateFormatting(startDateFormatting: any, endDateFormatring: any): any {
    // this.startDateFormatted = this.datePipe.transform(startDateFormatting, 'yyyy-MM-dd');
    // this.endDateFormatted = this.datePipe.transform(endDateFormatring, 'yyyy-MM-dd');
  }

  public sendGetRequestStartEndDates(startDate: any, endDate: any ): Observable<any> {
    // this.startDateFormatted = moment((startDate).format('YYYY-MM-DD'));
    // this.endDateFormatted = moment((endDate).format('YYYY-MM-DD'));
    this.startDateFormatted = this.datePipe.transform(startDate, 'yyyy-MM-dd');
    this.endDateFormatted = this.datePipe.transform(endDate, 'yyyy-MM-dd');
    console.log('date formatted:', this.startDateFormatted);
    console.log('date formatted:', this.endDateFormatted);
    return this.httpClient.get<any>(this.REST_API_SERVER + '&start_date=' + this.startDateFormatted + '&end_date=' + this.endDateFormatted);
  }
}
// https://api.nasa.gov/planetary/apod?api_key=VUrpVsyC6Wbt0djJQ5LeQPTqViJXyOpoyftnJogT&start_date=2021-06-07&end_date=2021-06-11
// https://api.nasa.gov/planetary/apod?api_key=VUrpVsyC6Wbt0djJQ5LeQPTqViJXyOpoyftnJogT&start_date=2021-06-17&end_date=2021-06-18
