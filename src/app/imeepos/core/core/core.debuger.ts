import { Injectable, isDevMode } from '@angular/core';

@Injectable()
export class CoreDebugerService {
    isDebuger: boolean = isDevMode();
    constructor() { }

    log(msg) {
        this.isDebuger && console.log(msg);
    }

    asset(msg, desc) {
        this.isDebuger && console.assert(msg, desc);
    }
}