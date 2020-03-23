import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Ref512Component } from './formulaes/ref512.component';

const appRoutes: Routes = [
  { path: '512', component: Ref512Component },
];


@NgModule({
  declarations: [
    AppComponent,
    Ref512Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
