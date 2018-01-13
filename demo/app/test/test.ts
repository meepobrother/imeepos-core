import { Component, NgModule, Injector } from '@angular/core';
import { CorePage, ICoreModule } from '../../../src/app/app';

@Component({
    selector: 'test',
    template: `
        <a (click)="toTest2()">toTest2</a>
    `
})
export class TestPage extends CorePage {
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
        }, 600);
    }

    toTest2(){
        this.router.navigate(['test2'])
    }
}


@NgModule({
  imports: [
    ICoreModule.forChild([{
      path: '',
      component: TestPage
    }])
  ],
  declarations: [
    TestPage
  ],
  exports: [TestPage],
})
export class TestModule { }