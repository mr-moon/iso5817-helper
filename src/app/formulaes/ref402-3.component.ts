import { Component } from '@angular/core';
import { AbstractRefComponent } from './ref.component';

@Component({
    selector: 'ref402-3',
    templateUrl: './ref402-3.component.html',
    styleUrls: []
})
export class Ref4023Component extends AbstractRefComponent {
    public a: number = 5;
    public s: number = 5;

    constructor() {
        super();
        this.t = 0.5;
        this.h = 1;
    }
}
