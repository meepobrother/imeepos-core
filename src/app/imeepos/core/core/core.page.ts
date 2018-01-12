import {
    NgModule,
    Component,
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    OnChanges,
    SimpleChanges,
    OnDestroy,
    DoCheck,
    AfterViewChecked,
    AfterViewInit,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ViewChildren,
    ContentChild,
    ContentChildren,
    ElementRef,
    ChangeDetectionStrategy,
    Injector
} from '@angular/core';
import { CoreDebugerService } from './core.debuger';
import { CoreConfigInterface, CORE_TOKEN } from './core.config';

export class CorePage implements OnInit, AfterContentInit, AfterContentChecked, OnChanges, OnDestroy, DoCheck, AfterViewChecked, AfterViewInit {
    config: CoreConfigInterface;
    log: CoreDebugerService;
    private isDev: boolean = true;
    constructor(
        public injector: Injector,
        private __pageName: string,
    ) {
        this.config = this.injector.get(CORE_TOKEN);
        this.log = this.injector.get(CoreDebugerService);
    }

    setDebuger(isDev: boolean) {
        this.isDev = isDev;
    }

    // 1
    ngOnInit() {
        this.isDev && this.log.log(`${this.__pageName}.ngOnInit`);
    }
    // 2
    ngDoCheck() {
        this.isDev && this.log.log(`${this.__pageName}.ngDoCheck`);
    }
    // 3
    ngAfterContentInit() {
        this.isDev && this.log.log(`${this.__pageName}.ngAfterContentInit`);
    }
    // ngAfterContentChecked后属性值不能改变
    ngAfterContentChecked() {
        this.isDev && this.log.log(`${this.__pageName}.ngAfterContentChecked`);
    }
    // 5
    ngAfterViewInit() {
        this.isDev && this.log.log(`${this.__pageName}.ngAfterViewInit`);
    }
    // 6
    ngAfterViewChecked() {
        this.isDev && this.log.log(`${this.__pageName}.ngAfterViewChecked`);
    }
    // 7
    ngOnChanges(changes: SimpleChanges) {
        this.isDev && this.log.log(`${this.__pageName}.ngOnChanges`);
    }
    // 8
    ngOnDestroy() {
        this.isDev && this.log.log(`${this.__pageName}.ngOnDestroy`);
    }
}
