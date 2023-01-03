import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CardzContainerComponent} from './cardz/cardz-container/cardz-container.component';
import {CardzDisplayComponent} from './cardz/cardz-display/cardz-display.component';
import {CardzFormComponent} from './cardz/cardz-form/cardz-form.component';
import {CardzLinkComponent} from "./cardz/cardz-link/cardz-link.component";

@NgModule({
  declarations: [
    AppComponent,
    CardzContainerComponent,
    CardzLinkComponent,
    CardzFormComponent,
    CardzDisplayComponent,
    CardzContainerComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
