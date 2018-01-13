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
