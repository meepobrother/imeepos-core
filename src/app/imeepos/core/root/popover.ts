import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { slideInDown, slideOutDown } from '../animations';
import { trigger, transition, useAnimation } from '@angular/animations';
@Component({
  template: `
  <h3>Contact Crisis Center</h3>
<div *ngIf="details">
  {{ details }}
</div>
<div>
  <div>
    <label>Message: </label>
  </div>
  <div>
    <textarea [(ngModel)]="message" rows="10" cols="35" [disabled]="sending"></textarea>
  </div>
</div>
<p *ngIf="!sending">
  <button (click)="send()">Send</button>
  <button (click)="cancel()">Cancel</button>
</p>
  `,
  styles: [':host { position: relative; bottom: 10%; }'],
  animations: [
    trigger('slideInDown', [
      transition(':enter', useAnimation(slideInDown, { params: { timing: .3, delay: 0 } })),
      transition(':leave', useAnimation(slideOutDown, { params: { timing: .3, delay: 0 } }))
    ])
  ]
})
export class ComposeMessageComponent {
  @HostBinding('@slideInDown') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  details: string;
  sending = false;
  message: string = '';

  constructor(private router: Router) { }

  send() {
    this.sending = true;
    this.details = 'Sending Message...';
    this.closePopup();
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{ outlets: { popup: null } }]);
  }
}