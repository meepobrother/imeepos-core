import { Component, NgModule, Injector } from '@angular/core';
import { CorePage, ICoreModule } from '../../../src/app/app';

@Component({
    selector: 'test2',
    template: `
        <a (click)="toTest()">toTest</a>
    `
})
export class Test2Page extends CorePage {
    constructor(
        injector: Injector
    ) {
        super(injector, 'test');
    }

    ngOnInit() {
        // 显示loading
        // this.loading.show();
    }
    ngAfterContentInit() {
        this.log.log('调试状态打印， 非调试状态不打印');
        // 隐藏loading
        setTimeout(() => {
            this.loading.hide();
        }, 1000);
    }

    toTest() {
        this.router.navigate(['test'])
    }
}


@NgModule({
    imports: [
        ICoreModule.forChild([{
            path: '',
            component: Test2Page
        }])
    ],
    declarations: [
        Test2Page
    ],
    exports: [Test2Page],
})
export class Test2Module { }