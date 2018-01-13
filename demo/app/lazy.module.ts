import { NgModule } from '@angular/core';
import { ICoreModule } from '../../src/app/app';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        ICoreModule.forChild([{
            path: 'test',
            loadChildren: 'app/test/test#TestModule'
        }, {
            path: 'test2',
            loadChildren: 'app/test/test2#Test2Module'
        }])
    ],
    providers: []
})
export class LazyModule { }
