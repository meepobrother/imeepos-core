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
    ChangeDetectionStrategy
} from '@angular/core';
import { CoreDebugerService } from './core.debuger';
export class CorePage implements OnInit, AfterContentInit, AfterContentChecked, OnChanges, OnDestroy, DoCheck, AfterViewChecked, AfterViewInit {
    constructor(
        public log: CoreDebugerService,
        private __pageName: string
    ) {
        // console.log(`${this.__pageName}.constructor`);
    }
    // 1
    ngOnInit() {
        this.log.log(`${this.__pageName}.ngOnInit`);
    }
    // 2
    ngDoCheck() {
        this.log.log(`${this.__pageName}.ngDoCheck`);
    }
    // 3
    ngAfterContentInit() {
        this.log.log(`${this.__pageName}.ngAfterContentInit`);
    }
    // ngAfterContentChecked后属性值不能改变
    ngAfterContentChecked() {
        this.log.log(`${this.__pageName}.ngAfterContentChecked`);
    }
    // 5
    ngAfterViewInit() {
        this.log.log(`${this.__pageName}.ngAfterViewInit`);
    }
    // 6
    ngAfterViewChecked() {
        this.log.log(`${this.__pageName}.ngAfterViewChecked`);
    }
    // 7
    ngOnChanges(changes: SimpleChanges) {
        this.log.log(`${this.__pageName}.ngOnChanges`);
    }
    // 8
    ngOnDestroy() {
        this.log.log(`${this.__pageName}.ngOnDestroy`);
    }
}
