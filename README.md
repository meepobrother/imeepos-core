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
