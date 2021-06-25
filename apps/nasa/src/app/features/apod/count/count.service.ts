import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CountService {
  private REST_API_SERVER = 'https://api.nasa.gov/planetary/apod?api_key=VUrpVsyC6Wbt0djJQ5LeQPTqViJXyOpoyftnJogT';

  constructor(private httpClient: HttpClient) {
  }

  public sendGetRequestCount(count: any) {
    // return this.httpClient.get('https://api.nasa.gov/planetary/apod?api_key=VUrpVsyC6Wbt0djJQ5LeQPTqViJXyOpoyftnJogT&count=2');
    return this.httpClient.get(this.REST_API_SERVER + '&count=' + count);
  }

}
