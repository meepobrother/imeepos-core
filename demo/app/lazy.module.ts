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
