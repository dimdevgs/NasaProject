import { Component } from '@angular/core';
import {CountService} from "./count.service";
import DataSource from "devextreme/data/data_source";

@Component({
  selector: 'nasa-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent{
  dataSource: any | undefined;
  data: any = null;

  constructor(private countService: CountService) {
    this.countService.sendGetRequestCount().subscribe(data => {
      console.log('data count:', data);
      this.dataSource = data;
    })
  }

}
