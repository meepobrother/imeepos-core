## imeepos core for angular
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

@NgModule({
    imports: [
        ICoreModule.forChild([{
            path: 'test',
            loadChildren: 'app/test/test.module#TestModule'
        }])
    ],
    providers: []
})
export class LazyModule { }
```
- 子路由
```ts
import { ICoreModule, provideRoutes } from '../../../src/app/app';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestPage } from './test';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
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
- 生命周期
```ts
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
```

- 封装常规项目配置，包括首屏加载动画！及日志空页面参数等！