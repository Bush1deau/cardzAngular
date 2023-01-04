import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {CardzViewerComponent} from "./cardz-viewer/cardz-viewer.component";
import {CardzCustomizationComponent} from "./cardz-customization/cardz-customization.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: ':id/customize', component: CardzCustomizationComponent},
  {path: ':id/view', component: CardzViewerComponent},
];
@NgModule({
  declarations: [
    CardzViewerComponent,
    CardzCustomizationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CardzModule { }
