import { Component, OnInit } from '@angular/core';
import { StartEndService } from '../start-end.service';
import DataSource from 'devextreme/data/data_source';
import CustomStore from "devextreme/data/custom_store";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'nasa-apod-list-view',
  templateUrl: './apod-list-view.component.html',
  styleUrls: ['./apod-list-view.component.css']
})
export class ApodListViewComponent implements OnInit {
  dataSource: DataSource;
  // data: any;
  url: string;

  // constructor(private startEndService: StartEndService, private http: HttpClient) {
  //   this.customDataSource = new CustomStore({
  //     key: 'title',
  //     loadMode: 'raw', // omit in the DataGrid, TreeList, PivotGrid, and Scheduler
  //     load: () => {
  //       return this.http.get('https://api.nasa.gov/planetary/apod?api_key=VUrpVsyC6Wbt0djJQ5LeQPTqViJXyOpoyftnJogT&start_date=2021-06-01&end_date=2021-06-05')
  //         .toPromise()
  //         .catch(() => { throw 'Data loading error' });
  //     }
  //   });
  // }

  constructor(httpClient: HttpClient) {
    this.url = 'https://api.nasa.gov/planetary/apod?api_key=VUrpVsyC6Wbt0djJQ5LeQPTqViJXyOpoyftnJogT&start_date=2021-06-01&end_date=2021-06-05'; // To-do automatic
    // this.url = 'https://api.nasa.gov/planetary/apod?api_key=VUrpVsyC6Wbt0djJQ5LeQPTqViJXyOpoyftnJogT';
    this.dataSource = new DataSource({
      store: new CustomStore({
        load: (loadoptions) => {
          return httpClient.get(this.url)
            .toPromise()
            .then(value => {
              console.log('data dataSource:', value);
              return {
                data: value,
                totalCount: 1 // To-do automatic
              };
            });
        }
      })

    })
  }

  ngOnInit(): void {
    // this.startEndService.sendGetRequestStartEndDates().subscribe(data => {
    //   console.log('apod-list-view:', data);
    //   this.data = data;
    // })
  }

}
