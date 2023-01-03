import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CardzComponent} from './cardz/cardz.component';
import {LinkComponent} from './link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    CardzComponent,
    LinkComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
