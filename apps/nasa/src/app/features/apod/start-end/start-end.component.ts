import {Component, OnInit} from '@angular/core';
import {ApodListViewComponent} from "./apod-list-view/apod-list-view.component";
import {HttpClient} from "@angular/common/http";
import {StartEndService} from "./start-end.service";
import {Router} from "@angular/router";


@Component({
  selector: 'nasa-start-end',
  templateUrl: './start-end.component.html',
  styleUrls: ['./start-end.component.css']
})
export class StartEndComponent {
  startDate: any = new Date();
  endDate: any = new Date();
  data: any;

  constructor(private httpClient: HttpClient, private startEndService: StartEndService, private router: Router) {
  }

}
