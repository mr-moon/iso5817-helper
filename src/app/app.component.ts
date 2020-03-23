import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'iso5817';

  public t:number;
  public h:number;

  constructor(public router: Router) {

  }

  setT(t) {
    this.t = Number(t);
  }

  setH(h) {
    this.h = Number(h);
  }
}
