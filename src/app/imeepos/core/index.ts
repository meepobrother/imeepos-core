import { NgModule, ModuleWithProviders, Optional, SkipSelf, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { IRootPage } from './root/root';
import { ImeeposEmptyPage } from './empty/empty';
import { CoreLoadingService } from './core/core.loading';
import { CoreDebugerService } from './core/core.debuger';
import { CoreConfigDefault, CoreConfigInterface, CORE_TOKEN } from './core/core.config';
import { RouterModule } from '@angular/router';
import { Routes, ROUTES } from '@angular/router';

let meepoRoutes: Routes = [{
    path: "**",
    component: ImeeposEmptyPage
}];

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        IRootPage,
        ImeeposEmptyPage,
    ],
    exports: [
        IRootPage,
        ImeeposEmptyPage,
    ]
})
export class ICoreModule {
    constructor( @Optional() @SkipSelf() parentModule: ICoreModule) {
    }

    public static forRoot( cfg: CoreConfigInterface = CoreConfigDefault): ModuleWithProviders {
        return {
            ngModule: ICoreModule,
            providers: [
                provideRoutes(meepoRoutes),
                provideImeeposCore(cfg)
            ]
        }
    }
    public static forChild(routes: Routes = []): ModuleWithProviders {
        return {
            ngModule: ICoreModule,
            providers: [
                provideRoutes(routes)
            ]
        }
    }
}
export { CorePage } from './core/core.page';
export { IRootPage } from './root/root';
export { CoreDebugerService } from './core/core.debuger';
export { CoreConfigDefault, CoreConfigInterface, CORE_TOKEN } from './core/core.config';
export { makeDecorator, makeParamDecorator, makePropDecorator, TypeDecorator } from './util/decorators';
export { isObservable, isPromise } from './util/lang';

export function provideImeeposCore(cfg: CoreConfigInterface): any {
    return [
        CoreLoadingService,
        CoreDebugerService,
        {
            provide: CORE_TOKEN,
            useValue: cfg
        }
    ];
}

export function provideRoutes(routes: Routes = []): any {
    return [
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: routes },
        { provide: ROUTES, multi: true, useValue: routes },
    ];
}
