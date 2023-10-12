import { Component, Input } from '@angular/core';
import { AddressData } from 'src/app/models/address-data.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent {
  @Input() address!: AddressData;

  constructor() { 
  }

  /* getDataString(): string {
    console.log(this.address.street + ' ' + this.address.number);
    return this.address.street + ' ' + this.address.number;
  } */

  /* getAddressComplet(address: Address): void {
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
