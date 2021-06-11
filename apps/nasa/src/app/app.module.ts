import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {DxDrawerModule, DxListModule, DxToolbarModule} from "devextreme-angular";
import {AppService} from "./app.service";
import {AppRoutingModule} from "./app-routing.module";
import {ApodService} from "./features/apod/apod.service";
import { HttpClientModule} from "@angular/common/http";
import { TodayComponent } from './features/apod/today/today.component';
import { StartEndComponent } from './features/apod/start-end/start-end.component';
import { CountComponent } from './features/apod/count/count.component';

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
    HttpClientModule
  ],
  providers: [AppService, ApodService],
  bootstrap: [AppComponent],
})
export class AppModule {}
