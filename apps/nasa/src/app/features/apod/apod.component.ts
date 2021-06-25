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
  selectedTabIndex: any;

  constructor(private apodService: ApodService, private router: Router) {
    this.tabs = apodService.getTabs();
  }

  selectTab(event: any): void {
    this.tabText = this.tabs[event.itemIndex].text;
    this.router.navigate(['/apod/', this.tabs[event.itemIndex].id]);
  }

  ngOnInit() {
    this.selectedTabIndex = this.apodService.selectedTabIndex;
  }

}
