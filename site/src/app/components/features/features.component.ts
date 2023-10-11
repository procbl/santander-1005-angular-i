import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  @Input() public featuresData!: any;
  ngOnInit(){
    console.log(this.featuresData)
  }
}
