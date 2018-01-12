## imeepos core for angular
```ts
import { ImeeposCoreModule, ImeeposRootPage } from 'imeepos-core';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    ImeeposCoreModule.forRoot()
  ],
  bootstrap: [ImeeposRootPage]
})
export class AppModule { }
```

- 封装常规项目配置，包括首屏加载动画！及日志空页面参数等！