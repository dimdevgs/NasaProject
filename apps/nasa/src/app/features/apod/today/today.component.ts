import { Component, OnInit } from '@angular/core';
import {ApodService} from "../apod.service";

@Component({
  selector: 'nasa-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  data: any;

  constructor(private apodService: ApodService) {
  }

  ngOnInit(): void {
    this.apodService.sendGetRequest().subscribe(data => {
      console.log('today data:', data);
      this.data = data;
    })
  }

}
