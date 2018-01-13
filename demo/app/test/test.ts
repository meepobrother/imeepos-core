import { Component, OnInit, Injector, Type } from '@angular/core';
import { CorePage } from '../../../src/app/app';

@Component({
    selector: 'test',
    template: `test`
})
export class TestPage extends CorePage {
    constructor(
        injector: Injector
    ) {
        super(injector, 'test');
    }
    ngAfterContentInit() {

    }
}
