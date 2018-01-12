import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ImeeposRootPage } from './root/root';
import { ImeeposEmptyPage } from './empty/empty';
import { CoreLoadingService } from './core/core.loading';
import { CoreDebugerService } from './core/core.debuger';
import { Routes } from '@angular/router/src/config';

let routes: Routes = [{
    path: "**",
    component: ImeeposEmptyPage
}];
@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    declarations: [
        ImeeposRootPage,
        ImeeposEmptyPage
    ]
})
export class ImeeposCoreModule {
    constructor( @Optional() @SkipSelf() parentModule: ImeeposCoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the main.ts only');
        }
    }
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: ImeeposCoreModule,
            providers: [
                CoreLoadingService,
                CoreDebugerService
            ]
        }
    }
}
export { CorePage } from './core/core.page';
export { ImeeposRootPage } from './root/root';
export { CoreDebugerService } from './core/core.debuger';
