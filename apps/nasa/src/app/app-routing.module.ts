import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ApodComponent } from "./features/apod/apod.component";
import { EonetComponent } from "./features/eonet/eonet.component";
import { DonkiComponent } from "./features/donki/donki.component";
import { PageNotFoundComponent } from "./features/page-not-found/page-not-found.component";
import {DxButtonModule, DxTabsModule} from "devextreme-angular";
import {TodayComponent} from "./features/apod/today/today.component";
import {StartEndComponent} from "./features/apod/start-end/start-end.component";
import {CountComponent} from "./features/apod/count/count.component";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  { path: '', redirectTo: 'apod', pathMatch: 'full' },
  { path: 'apod', component: ApodComponent },
  { path: 'apod/today', component: TodayComponent },
  { path: 'apod/start-end', component: StartEndComponent },
  { path: 'apod/count', component: CountComponent },
  { path: 'eonet', component: EonetComponent },
  { path: 'donki', component: DonkiComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxButtonModule, DxTabsModule, CommonModule],
  exports: [RouterModule],
  declarations: [
    ApodComponent,
    EonetComponent,
    DonkiComponent,
    PageNotFoundComponent,
    TodayComponent,
    StartEndComponent,
    CountComponent
  ]
})

export class AppRoutingModule { }
