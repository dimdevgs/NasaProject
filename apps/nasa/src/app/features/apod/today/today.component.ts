import { Component } from '@angular/core';
import {ApodService} from "../apod.service";

@Component({
  selector: 'nasa-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent {
  data: any = null;

  constructor(private apodService: ApodService) {
    this.apodService.sendGetRequest().subscribe(data => {
      this.data = data;
    })
  }

}
