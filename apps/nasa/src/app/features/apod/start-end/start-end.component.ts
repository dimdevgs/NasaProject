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

  dateBoxValueChanged(event: any): void {
    // console.log('startDate:', this.startDate);
    // console.log('endDate:', this.endDate);
    // this.apodListViewComponent.startDateApodListView = this.startDate;
    // this.apodListViewComponent.endDateApodListView = this.endDate;
    // const newApodListViewComponentObj = new ApodListViewComponent(this.httpClient, this.startEndService);
    // console.log(event.value);
  }


  clickFindButton(): void {
    // this.startEndService.startDateService = this.startDate;
    // this.startEndService.endDateService = this.endDate;
    // this.startEndService.dateFormatting(this.startDate, this.endDate)
    // const newApodListViewComponentObj = new ApodListViewComponent(this.httpClient, this.startEndService);
  }

/*  clickFindButton(event: any): void {
    this.startEndService.startDate = this.startDate;
    this.startEndService.endDate = this.endDate;
    console.log('startDate:', this.startDate )
    console.log('endDate:', this.endDate )
/!*    this.startEndService.sendGetRequestStartEndDates(startDate, endDate).subscribe(value => {
      console.log('start-end value:', value);
      const newApodListViewComponentObj = new ApodListViewComponent(this.httpClient, this.startEndService, this.startDate, this.endDate)
    });*!/
    this.apodListViewComponent.startDate = this.startDate;
    this.apodListViewComponent.endDate = this.endDate;
    const newApodListViewComponentObj = new ApodListViewComponent(this.httpClient, this.startEndService)
  }*/
}
