import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {DxDateBoxModule, DxDrawerModule, DxListModule, DxToolbarModule} from "devextreme-angular";
import {AppService} from "./app.service";
import {AppRoutingModule} from "./app-routing.module";
import {ApodService} from "./features/apod/apod.service";
import { HttpClientModule} from "@angular/common/http";
import {StartEndService} from "./features/apod/start-end/start-end.service";
import {DatePipe} from "@angular/common";
import {ApodListViewComponent} from "./features/apod/start-end/apod-list-view/apod-list-view.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DxDrawerModule,
    DxListModule,
    DxToolbarModule,
    HttpClientModule,
    DxDateBoxModule
  ],
  providers: [AppService, ApodService, StartEndService, DatePipe, ApodListViewComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
