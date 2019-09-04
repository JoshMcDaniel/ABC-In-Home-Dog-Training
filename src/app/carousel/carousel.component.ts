import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { Result } from './result';
import { Observable, Subscription } from 'rxjs';
import { timer } from 'rxjs';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class CarouselComponent implements OnInit, OnDestroy {

  sliderArray: object[];
  transform: number;
  selectedIndex = 0;
  timer$: Observable<number>;
  subscriptions = [];
  subscription: Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    const dataSub = this.data.getData().subscribe((result: Result) => {
      this.sliderArray = result.sliderArray;
    });
    this.setTimer();
    this.subscriptions.push(dataSub);
  }

  setTimer(): void {
    // Set slideshow timer
    this.timer$ = timer(5_000, 5_000);
    const timerSub = this.timer$.subscribe(() => {
      const i = this.selectedIndex;
      i < (this.sliderArray.length - 1) ? this.selected(i + 1) : this.selectedIndex = 0;
    });
    this.subscriptions.push(timerSub);
  }

  selected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
   }

   keySelected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

   downSelected(i) {
   this.transform =  100 - (i) * 100;
     this.selectedIndex = this.selectedIndex + 1;
    const s = this.selectedIndex;
      s < (this.sliderArray.length - 1) ? this.selected(s + 1) : this.selectedIndex = 0;
   }

   ngOnDestroy() {
     this.subscriptions.forEach(sub => {
       sub.unsubscribe();
     });
   }

}
