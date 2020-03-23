import { Component } from '@angular/core';
import { AbstractRefComponent } from './ref.component';

@Component({
    selector: 'ref512',
    templateUrl: './ref512.component.html',
    styleUrls: []
})
export class Ref512Component extends AbstractRefComponent {
    public a: number = 1;

    constructor() {
        super();
        this.t = 0.5;
        this.h = 1;
    }
}
