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

