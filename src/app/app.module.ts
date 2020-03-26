import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Ref512Component } from './formulaes/ref512.component';
import { Ref4021Component } from './formulaes/ref402-1.component';
import { Ref4023Component } from './formulaes/ref402-3.component';

const appRoutes: Routes = [
  { path: '512', component: Ref512Component },
  { path: '4021', component: Ref4021Component },
  { path: '4023', component: Ref4023Component },
];


@NgModule({
  declarations: [
    AppComponent,
    Ref512Component,
    Ref4021Component,
    Ref4023Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
