import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StartEndService} from "./start-end.service";
import {Router} from "@angular/router";
import {ApodService} from "../apod.service";


@Component({
  selector: 'nasa-start-end',
  templateUrl: './start-end.component.html',
  styleUrls: ['./start-end.component.css']
})
export class StartEndComponent implements OnInit{
  startDate: any = new Date();
  endDate: any = new Date();
  data: any;
  selectedTabIndex = 1;

  constructor(private httpClient: HttpClient, private apodService: ApodService, private startEndService: StartEndService, private router: Router) {
  }

  ngOnInit() {
    this.apodService.selectedTabIndex = this.selectedTabIndex;
  }

}
