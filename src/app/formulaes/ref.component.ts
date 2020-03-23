import {Component} from '@angular/core';

@Component({template: ''})
export class AbstractRefComponent {

  public h:number;
  public t:number;

  fixNumeric(input: string, def: number = 0): number {
    let val = parseFloat(input);

    if (!val || isNaN(val)) {
      return def;
    }

    return val;
  }
}
