import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Injectable()
export class CoreLoadingService {
    _loading: any;
    get loading() {
        return this.doc.body.getElementsByClassName('loading-wrap')[0]
    }

    set loading(val: any) {
        this._loading = val;
    }

    set isShow(val: boolean) {
        if (val) {
            this.loading.classList.remove('hidden');
            this.loading.classList.add('shown');
        } else {
            this.loading.classList.remove('shown');
            this.loading.classList.add('hidden');
        }
    }

    constructor(
        @Inject(DOCUMENT) private doc: Document
    ) {
        this.createLoading();
        this.show();
    }

    show(): void {
        this.isShow = true;
    }

    hide(): void {
        this.isShow = false;
    }

    createLoading(): HTMLElement {
        this.loading = this.doc.createElement('div');
        this.loading.className = 'loading-wrap animated';
        this.loading.innerHTML = `<div class="loading-container">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>`;
        return this.loading;
    }
}