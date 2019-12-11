import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-ngx-owl-carousel-o',
  templateUrl: './ngx-owl-carousel-o.component.html',
  styleUrls: ['./ngx-owl-carousel-o.component.scss']
})
export class NgxOwlCarouselOComponent implements OnInit {

  @Input() data: any[any];

  options: OwlOptions = {
    loop: true,
    /* mouseDrag: false, */
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };

  constructor() { }

  ngOnInit() {
  }

}
