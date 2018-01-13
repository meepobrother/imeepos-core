import { Component, OnInit, ElementRef, Injector } from '@angular/core';
import { CorePage } from '../core/core.page';
import { CoreLoadingService } from '../core/core.loading';
import { CoreDebugerService } from '../core/core.debuger';
import { CORE_TOKEN } from '../core/core.config';
import { Router, ChildActivationStart, ChildActivationEnd } from '@angular/router';
@Component({
    selector: 'i-root',
    templateUrl: './root.html'
})
export class IRootPage extends CorePage {
    constructor(
        injector: Injector,
        public router: Router
    ) {
        super(injector, 'ImeeposRootPage');
        this.setDebuger(false);

        this.router.events.subscribe(e => {
            if (e instanceof ChildActivationStart) { 
                this.loading.show();
            }
            if (e instanceof ChildActivationEnd) { 
                // this.loading.hide();
            }
        })
    }
}