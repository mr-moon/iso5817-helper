import { Component } from '@angular/core';
import { AbstractRefComponent } from './ref.component';

@Component({
    selector: 'ref402-1',
    templateUrl: './ref402-1.component.html',
    styleUrls: []
})
export class Ref4021Component extends AbstractRefComponent {
    public a: number = 5;

    constructor() {
        super();
        this.t = 0.5;
        this.h = 1;
    }

    getQualityLevel() {
        if (this.h <= 0.2 * this.a) {
            return 'D';
        }
        
        return null;
    }
}
