import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CardzModule} from './cardz/cardz.module';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', redirectTo: 'cardz/1/view', pathMatch: 'full'},
  {path: 'cardz', loadChildren: () => import('./cardz/cardz.module').then(m => m.CardzModule)},
  {path: '**', redirectTo: 'cardz/1/view'},
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CardzModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
