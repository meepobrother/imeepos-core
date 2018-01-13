## imeepos core for angular

- [路由插座](docs/routes.md)
- [动画库](docs/animation.md)


- 核心
```ts
import { ICoreModule, IRootPage } from '../../src/app/app';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LazyModule } from './lazy.module';
import {TestModule} from './test/test.module';
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {
      useHash: true
    }),
    LazyModule,
    ICoreModule.forRoot()
  ],  
  bootstrap: [IRootPage]
})
export class AppModule { }
```
- 懒加载
```ts
import { NgModule } from '@angular/core';
import { ICoreModule } from '../../src/app/app';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [
        RouterModule.forChild([{
            path: 'test',
            loadChildren: 'app/test/test#TestModule'
        }, {
            path: 'test2',
            loadChildren: 'app/test/test2#Test2Module'
        }]),
        ICoreModule.forChild()
    ],
    providers: []
})
export class LazyModule { }
```

- router for test
```ts
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
        }, 1000);
        
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
```

- router for test2
```ts
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
```

- 封装常规项目配置，包括首屏加载动画！及日志空页面参数等！