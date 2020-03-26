import {Component} from '@angular/core';

@Component({template: ''})
export class AbstractRefComponent {

  public h:number;
  public t:number;

  fixNumeric(input: string, def: number = 0, min: number = NaN, max: number = NaN): number {
    let val = parseFloat(input.replace(/,/g, '.'));

    if (!val || isNaN(val) || val < 0) {
      val = def;
    }

    if (!isNaN(min)) {
      val = Math.max(val, min);
    }

    if (!isNaN(max)) {
      val = Math.min(val, max);
    }

    return val;
  }

  moveCaretToEnd($event) {
    document.execCommand('selectAll',false,null)
  }

  min(...numbers: number[]): number {
    return Math.min.apply(this, numbers);
  }
  
  max(...numbers: number[]): number {
    return Math.max.apply(this, numbers);
  }
}
