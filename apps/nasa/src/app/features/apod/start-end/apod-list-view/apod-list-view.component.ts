import {Component, Input} from '@angular/core';
import { StartEndService } from '../start-end.service';
import DataSource from 'devextreme/data/data_source';
import CustomStore from "devextreme/data/custom_store";
import {HttpClient} from "@angular/common/http";

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
    this.dataSource = new DataSource({
      store: new CustomStore({
        load: (loadoptions) => {
          return this.startEndService.sendGetRequestStartEndDates(this.startDateApodListView, this.endDateApodListView)
            .toPromise()
            .then(value => {
              return {
                data: value,
                totalCount: 1 // TODO automatic?
              };
            });
        }
      }),
    })

    this.startEndService.getFirstApod(this.startDateApodListView).subscribe(firstApod => {
      this.currentApod = firstApod[0];
    });
  }

  listSelectionChanged = (event: any) => {
    this.currentApod = event.addedItems[0];
  }

  ngOnChanges() {
    this.startEndService.sendGetRequestStartEndDates(this.startDateApodListView, this.endDateApodListView).subscribe(value => {
      this.dataSource = value;
    });
  }

}
