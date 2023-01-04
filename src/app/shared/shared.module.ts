import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardzDisplayComponent} from "./ui/cardz-display/cardz-display.component";
import {CardzLinkComponent} from "./ui/cardz-link/cardz-link.component";
import {CardzFormComponent} from "./ui/cardz-form/cardz-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    CardzDisplayComponent,
    CardzLinkComponent,
    CardzFormComponent,
    MainMenuComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    CardzDisplayComponent,
    CardzLinkComponent,
    CardzFormComponent,
    MainMenuComponent,
  ],
})
export class SharedModule { }
