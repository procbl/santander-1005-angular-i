import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent {
  @Input() address!: any;

  constructor() { 
  }

  /* getDataString(): string {
    console.log(this.address.street + ' ' + this.address.number);
    return this.address.street + ' ' + this.address.number;
  } */

  /* getAddressComplet(address: any): void {
    console.log(
      address.street +
        ' ' +
        address.number +
        ' ' +
        address.state +
        ' ' +
        address.city +
        ' ' +
        address.neighborhood
    );
  } */
}
