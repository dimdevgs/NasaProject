import {Component, OnInit} from '@angular/core';
import {ApodService} from "../apod.service";

@Component({
  selector: 'nasa-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  data: any = null;
  selectedTabIndex = 0;

  constructor(private apodService: ApodService) {
    this.apodService.sendGetRequest().subscribe(data => {
      this.data = data;
    })
  }

  ngOnInit() {
    this.apodService.selectedTabIndex = this.selectedTabIndex;
  }

}
