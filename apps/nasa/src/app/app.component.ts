import { Component, ViewChild } from '@angular/core';
import { List, AppService } from './app.service';
import { DxDrawerComponent } from 'devextreme-angular';

@Component({
  selector: 'nasa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(DxDrawerComponent, { static: false }) drawer: DxDrawerComponent | undefined;
  navigation: List[];
  // positionModes: string[] = ['left', 'right'];
  // showModes: string[] = ['push', 'shrink', 'overlap'];
  selectedOpenMode = 'shrink';
  selectedPosition = 'left';
  selectedRevealMode = 'slide';
  isDrawerOpen = true;
  elementAttr: any;

  constructor(appService: AppService) {
    this.navigation = appService.getNavigationList();
  }

  toolbarContent = [{
    widget: 'dxButton',
    location: 'before',
    options: {
      icon: 'menu',
      onClick: () => this.isDrawerOpen = !this.isDrawerOpen
    }
  },
    {
      text: 'Nasa Project',
      location: 'before'
    }
  ];
}
