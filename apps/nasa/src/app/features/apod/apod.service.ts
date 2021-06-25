import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Tab {
  id: number | undefined;
  text: string | undefined;
  // content: string | undefined;
}

const tabs: Tab[] = [
  {
    id: 1,
    text: "today"
  },
  {
    id: 2,
    text: "start-end"
  },
  {
    id: 3,
    text: "count"
  }
];

@Injectable({
  providedIn: 'root'
})
export class ApodService {
  private REST_API_SERVER = "https://api.nasa.gov/planetary/apod?api_key=VUrpVsyC6Wbt0djJQ5LeQPTqViJXyOpoyftnJogT";
  public selectedTabIndex: number | undefined;

  constructor(private httpClient: HttpClient) {
  }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

  getTabs(): Tab[] {
    return tabs;
  }

}
