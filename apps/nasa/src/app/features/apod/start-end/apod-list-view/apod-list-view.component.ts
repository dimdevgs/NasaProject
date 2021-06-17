import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { StartEndService } from '../start-end.service';
import DataSource from 'devextreme/data/data_source';
import CustomStore from "devextreme/data/custom_store";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import DevExpress from "devextreme";
import data = DevExpress.data;

@Component({
  selector: 'nasa-apod-list-view',
  templateUrl: './apod-list-view.component.html',
  styleUrls: ['./apod-list-view.component.css']
})

export class ApodListViewComponent {
  // @ViewChild(StartEndComponent);
  @Input() startDateApodListView: any;
  @Input() endDateApodListView: any;
  dataSource: DataSource;

  constructor(private httpClient: HttpClient, private startEndService: StartEndService) {
    console.log('constructor dataSource:', this.startDateApodListView, typeof this.endDateApodListView);
    // this.url = 'https://api.nasa.gov/planetary/apod?api_key=VUrpVsyC6Wbt0djJQ5LeQPTqViJXyOpoyftnJogT&start_date=2021-06-01&end_date=2021-06-05';
    this.dataSource = new DataSource({
      store: new CustomStore({
        load: (loadoptions) => {
          // return httpClient.get(this.url)
          return this.startEndService.sendGetRequestStartEndDates(this.startDateApodListView, this.endDateApodListView)
            .toPromise()
            .then(value => {
              console.log('data dataSource:', value);
              return {
                data: value,
                totalCount: 1 // TODO automatic
              };
            });
        }
      })

    })
  }

  ngOnChanges() {
    console.log('ngOnChange is running...');
    console.log('startDateApodListView:', this.startDateApodListView);
    console.log('endDateApodListView:', this.endDateApodListView);
    this.startEndService.sendGetRequestStartEndDates(this.startDateApodListView, this.endDateApodListView).subscribe(value => {
      console.log('subscribed value:', value);
      this.dataSource = value;
    });
  }

}
