import { Component, NgModule, Injector, ChangeDetectorRef } from '@angular/core';
import { CorePage, ICoreModule } from '../../../src/app/app';
import { MeepoBmapModule } from 'meepo-bmap';

import { CoreService } from 'meepo-core';
import { EventService } from 'meepo-event';
import { AxiosService } from 'meepo-axios';
import { StoreService } from 'meepo-store';
import {
    MarkerService,
    BMAP_LOCATION_SUCCESS,
    BMAP_MOVEEND
} from 'meepo-bmap';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'test',
    template: `
        <bmap-container></bmap-container>
        <bmap-center-icon></bmap-center-icon>
        <div bmapTextIcon></div>
        <bmap-info></bmap-info>
        <bmap-rich-marker [items]="items"></bmap-rich-marker>
    `
})
export class TestPage extends CorePage {
    constructor(
        injector: Injector,
        public core: CoreService,
        public event: EventService,
        public cd: ChangeDetectorRef,
        public marker: MarkerService,
        public axios: AxiosService,
        public store: StoreService
    ) {
        super(injector, 'test');
        this.event.subscribe(BMAP_LOCATION_SUCCESS, (res) => {
            if (res) {
                this.move$.next(res);
            }
        });
        this.event.subscribe(BMAP_MOVEEND, (res) => {
            if (res) {
                this.move$.next(res);
            }
        });
        this.move$.debounceTime(1000).subscribe(res => {
            this.createRandomPoint(res);
        });
    }

    items: Subject<any> = new Subject();
    _items: any[] = [];
    key: string = 'meepo.bmap.runners';
    tip: string;

    move$: Subject<any> = new Subject();

    createRandomPoint(res) {
        let runners: any[] = this.store.get(this.key, []);
        if (runners && runners.length > 0) {
            this.marker.addPointMarkers(runners);
        } else {
            let url1 = this.core.murl('entry//open', { m: 'imeepos_runner', __do: 'runner.createRandom' }, false);
            this.axios.bpost(url1, { ...res }).subscribe((data: any) => {
                let url = this.core.murl('entry//open', { m: 'imeepos_runner', __do: 'runner.getNearBy' }, false);
                this.axios.bpost(url, { lat: res.lat, lng: res.lng }).subscribe((data: any) => {
                    this.tip = data.msg;
                    this.marker.addPointMarkers(data.info);
                    this.store.set(this.key, data.info);
                });
            });
        }
    }

    ngOnInit() {
        // 显示loading
        // this.loading.show();
    }
    ngAfterContentInit() {
        this.log.log('调试状态打印， 非调试状态不打印');
        // 隐藏loading
        setTimeout(() => {
            this.loading.hide();
        }, 2000);
    }

    toTest2() {
        this.router.navigate(['test2'])
    }
}


@NgModule({
    imports: [
        ICoreModule.forChild([{
            path: '',
            component: TestPage
        }]),
        MeepoBmapModule
    ],
    declarations: [
        TestPage
    ],
    exports: [TestPage],
})
export class TestModule { }