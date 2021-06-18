import { Component, OnInit } from '@angular/core';
import {ApodService} from "../apod.service";

@Component({
  selector: 'nasa-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  data: any = null;

  constructor(private apodService: ApodService) {
    this.apodService.sendGetRequest().subscribe(data => {
      console.log('today data:', data);
      this.data = data;
    })
  }

  ngOnInit(): void {

  }

  // ngOnChanges() {
  //   this.apodService.sendGetRequest().subscribe(data => {
  //     console.log('today data:', data);
  //     this.data = data;
  //   })
  // }

}
