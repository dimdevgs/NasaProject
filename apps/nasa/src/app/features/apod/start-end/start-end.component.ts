import {Component, OnInit} from '@angular/core';
import { StartEndService } from "./start-end.service";

@Component({
  selector: 'nasa-start-end',
  templateUrl: './start-end.component.html',
  styleUrls: ['./start-end.component.css']
})
export class StartEndComponent implements OnInit {
  startDate: any = new Date();
  endDate: any = new Date();
  data: any;

  constructor(private startEndService: StartEndService) {
  }

  ngOnInit(): void {
  }

  dateBoxValueChanged(event: any): void {
    console.log(event.value);
  }

  clickFindButton(event: any): void {
    this.startEndService.startDate = this.startDate;
    this.startEndService.endDate = this.endDate;
    // this.startEndService.sendGetRequestStartEndDates().subscribe(data => {
    //   console.log('apod-list-view:', data);
    //   this.data = data;
    //})
  }
}
