import { Component, Input } from '@angular/core';
import { AddressData } from 'src/app/models/address-data.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent {
  @Input() address!: AddressData;

  constructor(){
    console.log('construtor')
    console.log(this.address) 
    /*buscaBanco().then((res) => {
      this.bancos = res;
    })*/
  }
  
  ngOnInit(): void {
    console.log('ngOnInit')
    console.log(this.address)
  }

  ngOnChanges(): void {
    console.log('ngOnChanges')
  }
  
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
  
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
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
