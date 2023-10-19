import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FeatureData } from 'src/app/models/feature-data.model';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent  /* implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy */{
  @Input() public featuresData!: FeatureData;
  @Input() public backgroundcolor!: string;
  
  constructor(){
    console.log('construtor')
  }

  /* ngOnInit(): void {
    console.log('ngOnInit')
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
  } */


}
