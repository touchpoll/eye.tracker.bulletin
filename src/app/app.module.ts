import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { Bulletin1Component } from './pages/bulletin1/bulletin1.component';
import { BulletinTextComponent } from './components/bulletin.text/bulletin.text.component';
import { Bulletin2Component } from './pages/bulletin2/bulletin2.component';
import { EndScreenComponent } from './pages/end.screen/end.screen.component';

const routesApp: Routes = [
  { path: '', redirectTo: 'bul1', pathMatch: 'full' },
  { path: 'bul1', component: Bulletin1Component},
  { path: 'bul2', component: Bulletin2Component},
  { path: 'end', component: EndScreenComponent},
  // { path: '**', redirectTo: '/404'},
];

@NgModule({
  declarations: [
    AppComponent,
    Bulletin1Component,
    BulletinTextComponent,
    Bulletin2Component,
    EndScreenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesApp, {enableTracing: false, initialNavigation: 'enabled'}) // <-- debugging purposes only

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



