import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgxHmCarouselBreakPointUp } from 'ngx-hm-carousel';

@Component({
  selector: 'ngx-hm-carousel-component',
  templateUrl: './ngx-hm-carousel.component.html',
  styleUrls: ['./ngx-hm-carousel.component.scss']
})
export class NgxHmCarouselComponent {

  @Input() data: any[any];
  @Input() length: number;

  infinite = true;

  breakpoint: NgxHmCarouselBreakPointUp[] = [
    {
      width: 500,
      number: 1
    },
    {
      width: 800,
      number: 2
    },
    {
      width: 1024,
      number: 4
    },
  ];

  constructor() { }
}
