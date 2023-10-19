import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnDestroy {
  @Input() public aboutData!: any 

  ngOnDestroy(): void {
    console.log('onDestroy contact')
   }
}
