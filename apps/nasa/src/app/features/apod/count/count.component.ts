import { Component } from '@angular/core';
import {CountService} from "./count.service";

@Component({
  selector: 'nasa-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent{
  dataSource: any | undefined;
  data: any = null;
  count: any = 10;

  constructor(private countService: CountService) {
    this.countService.sendGetRequestCount(this.count).subscribe(data => {
      console.log('data count:', data);
      this.dataSource = data;
    })
  }

  textBoxValueChanged(event: any) {
    this.count = event.value;
    this.countService.sendGetRequestCount(this.count).subscribe(data => {
      this.dataSource = data;
    })
  }

}
