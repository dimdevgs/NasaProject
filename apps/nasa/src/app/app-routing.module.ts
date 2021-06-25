import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ApodComponent } from "./features/apod/apod.component";
import { EonetComponent } from "./features/eonet/eonet.component";
import { DonkiComponent } from "./features/donki/donki.component";
import { PageNotFoundComponent } from "./features/page-not-found/page-not-found.component";
import {
    DxButtonModule,
    DxDataGridModule,
    DxDateBoxModule,
    DxListModule,
    DxTabsModule, DxTextBoxModule,
    DxTileViewModule, DxValidatorModule
} from "devextreme-angular";
import {TodayComponent} from "./features/apod/today/today.component";
import {StartEndComponent} from "./features/apod/start-end/start-end.component";
import {CountComponent} from "./features/apod/count/count.component";
import {CommonModule} from "@angular/common";
import {DxiValidationRuleModule} from "devextreme-angular/ui/nested";
import {ApodListViewComponent} from "./features/apod/start-end/apod-list-view/apod-list-view.component";

const routes: Routes = [
  { path: '', redirectTo: 'apod/1', pathMatch: 'full' },
  { path: 'apod', redirectTo: 'apod/1', pathMatch: 'full' },
  { path: 'apod/1', component: TodayComponent },
  { path: 'apod/2', component: StartEndComponent },
  { path: 'apod/3', component: CountComponent },
  { path: 'eonet', component: EonetComponent },
  { path: 'donki', component: DonkiComponent },
  { path: '**', component: PageNotFoundComponent },
];
// {path : 'heroes', component : HeroDetailComponent, data : {some_data : 'some value'}}


@NgModule({
  imports: [RouterModule.forRoot(routes), DxButtonModule, DxTabsModule, CommonModule, DxDateBoxModule, DxiValidationRuleModule, DxListModule, DxDataGridModule, DxTileViewModule, DxTextBoxModule, DxValidatorModule],
  exports: [RouterModule],
  declarations: [
    ApodComponent,
    EonetComponent,
    DonkiComponent,
    PageNotFoundComponent,
    TodayComponent,
    StartEndComponent,
    ApodListViewComponent,
    CountComponent
  ]
})

export class AppRoutingModule { }
