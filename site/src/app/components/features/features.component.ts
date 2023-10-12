import { Component, Input } from '@angular/core';
import { FeatureData } from 'src/app/models/feature-data.model';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  @Input() public featuresData!: FeatureData;
  @Input() public backgroundcolor!: string;
  constructor(){
  }
}
