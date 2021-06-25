import {Component, OnInit} from '@angular/core';
import {CountService} from "./count.service";
import {ApodService} from "../apod.service";

@Component({
  selector: 'nasa-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit{
  dataSource: any | undefined;
  data: any = null;
  count = 10;
  selectedTabIndex = 2;

  constructor(private apodService: ApodService, private countService: CountService) {
    this.countService.sendGetRequestCount(this.count).subscribe(data => {
      this.dataSource = data;
    })
  }

  textBoxValueChanged(event: any) {
    this.count = event.value;
    this.countService.sendGetRequestCount(this.count).subscribe(data => {
      this.dataSource = data;
    })
  }

  ngOnInit() {
    this.apodService.selectedTabIndex = this.selectedTabIndex;
  }

}
