import { ICoreModule, IRootPage } from '../../src/app/app';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LazyModule } from './lazy.module';
import { EventModule } from 'meepo-event';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: '',
      pathMatch: 'full',
      redirectTo: 'test'
    }], {
        useHash: true
      }),
    LazyModule,
    ICoreModule.forRoot(),
    EventModule.forRoot()
  ],
  bootstrap: [IRootPage]
})
export class AppModule { }
