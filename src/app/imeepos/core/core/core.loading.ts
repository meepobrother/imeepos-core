import { Injectable, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Injectable()
export class CoreLoadingService {
    loading: HTMLElement;
    constructor(
        @Inject(DOCUMENT) private doc: Document
    ) {
        this.createLoading();
        this.show();
    }

    show(): void {
        if (!this.check()) {
            this.doc.body.appendChild(this.loading);
        }
    }

    hide(): void {
        let loading = this.doc.body.getElementsByClassName('loading-container');
        if (this.check()) {
            this.doc.body.removeChild(loading[0]);
        }
    }

    check(): boolean {
        let loading = this.doc.body.getElementsByClassName('loading-container');
        return loading && loading.length > 0;
    }

    createLoading(): HTMLElement {
        this.loading = this.doc.createElement('div');
        this.loading.className = 'loading-container';
        this.loading.innerHTML = `<div class="sk-circle">
            <div class="sk-circle1 sk-child"></div>
            <div class="sk-circle2 sk-child"></div>
            <div class="sk-circle3 sk-child"></div>
            <div class="sk-circle4 sk-child"></div>
            <div class="sk-circle5 sk-child"></div>
            <div class="sk-circle6 sk-child"></div>
            <div class="sk-circle7 sk-child"></div>
            <div class="sk-circle8 sk-child"></div>
            <div class="sk-circle9 sk-child"></div>
            <div class="sk-circle10 sk-child"></div>
            <div class="sk-circle11 sk-child"></div>
            <div class="sk-circle12 sk-child"></div>
        </div>`;
        return this.loading;
    }
}