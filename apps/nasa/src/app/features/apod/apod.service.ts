import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Tab {
  id: number | undefined;
  text: string | undefined;
  content: string | undefined;
}

let tabs: Tab[] = [
  {
    id: 0,
    text: "today",
    content: "Today tab content"
  },
  {
    id: 1,
    text: "start-end",
    content: "Start-End tab content"
  },
  {
    id: 2,
    text: "count",
    content: "Count tab content"
  }
];

@Injectable({
  providedIn: 'root'
})
export class ApodService {
  private REST_API_SERVER = "https://api.nasa.gov/planetary/apod?api_key=VUrpVsyC6Wbt0djJQ5LeQPTqViJXyOpoyftnJogT";

  constructor(private httpClient: HttpClient) {
  }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

  getTabs(): Tab[] {
    return tabs;
  }
}
