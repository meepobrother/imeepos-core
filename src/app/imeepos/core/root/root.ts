import { Component, OnInit, ElementRef, Injector } from '@angular/core';
import { CorePage } from '../core/core.page';
import { CoreLoadingService } from '../core/core.loading';
import { CoreDebugerService } from '../core/core.debuger';
import { CORE_TOKEN } from '../core/core.config';
@Component({
    selector: 'body',
    templateUrl: './root.html'
})
export class IRootPage extends CorePage {
    constructor(
        public loading: CoreLoadingService,
        injector: Injector
    ) {
        super(injector, 'ImeeposRootPage');
        this.setDebuger(false);
    }

    ngOnInit(){
    }

    ngAfterViewChecked() {
        this.loading.hide();
    }
}