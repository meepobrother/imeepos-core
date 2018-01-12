import { Component, OnInit, ElementRef } from '@angular/core';
import { CorePage } from '../core/core.page';
import { CoreLoadingService } from '../core/core.loading';
import { CoreDebugerService } from '../core/core.debuger';

@Component({
    selector: 'body',
    templateUrl: './root.html'
})
export class ImeeposRootPage extends CorePage {
    constructor(
        public loading: CoreLoadingService,
        public debuger: CoreDebugerService,
        public ele: ElementRef
    ) {
        super(debuger, 'ImeeposRootPage');
    }

    ngAfterViewChecked() {
        this.loading.hide();
    }
}