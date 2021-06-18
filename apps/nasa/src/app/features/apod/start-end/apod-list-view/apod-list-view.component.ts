import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { StartEndService } from '../start-end.service';
import DataSource from 'devextreme/data/data_source';
import CustomStore from "devextreme/data/custom_store";
import {HttpClient} from "@angular/common/http";
import {getLocaleFirstDayOfWeek} from "@angular/common";
import {first} from "rxjs/operators";

@Component({
  selector: 'nasa-apod-list-view',
  templateUrl: './apod-list-view.component.html',
  styleUrls: ['./apod-list-view.component.css']
})

export class ApodListViewComponent {
  @Input() startDateApodListView: any;
  @Input() endDateApodListView: any;
  dataSource: DataSource;
  currentApod: any;

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

    this.startEndService.getFirstApod(this.startDateApodListView).subscribe(firstApod => {
      // console.log('getFirstApod results:', firstApod);
      // console.log('First Apod:', firstApod[0]);
      this.currentApod = firstApod[0];
    });
  }

  listSelectionChanged = (event: any) => {
    this.currentApod = event.addedItems[0];
    // console.log('listSelectionChanged event:', event);
  }

  ngOnChanges() {
    // console.log('ngOnChange is running...');
    // console.log('startDateApodListView:', this.startDateApodListView);
    // console.log('endDateApodListView:', this.endDateApodListView);
    this.startEndService.sendGetRequestStartEndDates(this.startDateApodListView, this.endDateApodListView).subscribe(value => {
      this.dataSource = value;
      // console.log('subscribed value:', value);
    });
  }

}
