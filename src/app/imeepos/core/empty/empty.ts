import { Component, OnInit, Injector } from '@angular/core';
import { CorePage } from '../core/core.page';
import { CoreDebugerService } from '../core/core.debuger';

@Component({
    selector: 'imeepos-empty',
    templateUrl: 'empty.html'
})
export class ImeeposEmptyPage extends CorePage {
    constructor(
        injector: Injector
    ) {
        super(injector, 'ImeeposEmptyPage');
        this.setDebuger(false);
    }
}
