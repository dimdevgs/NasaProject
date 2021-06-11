import { Component, OnInit } from '@angular/core';
import { ApodService, Tab } from "./apod.service";
import { Router } from "@angular/router";

@Component({
  selector: 'nasa-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent implements OnInit {
  tabs: Tab[];
  tabContent: string | undefined;
  tabText: string | undefined;

  constructor(private apodService: ApodService, private router: Router) {
    this.tabs = apodService.getTabs();
  }

  ngOnInit(): void {
    // this.apodService.sendGetRequest().subscribe(data => {
    //   console.log('data: ', data);
    // })
  }

  selectTab(event: any): void {
    // this.tabContent = this.tabs[event.itemIndex].content;
    this.tabText = this.tabs[event.itemIndex].text;
    this.router.navigate(['/apod/' + this.tabText]); // only for today
  }

}
