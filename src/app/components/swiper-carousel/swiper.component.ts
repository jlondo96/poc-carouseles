import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'swiper-component',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperCarouselComponent implements OnInit {

  @Input() data: any[any];

  @Input() loader: boolean;

  public config: SwiperConfigInterface = {
    centeredSlides: true,
    loop: true,
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    pagination: false,
    breakpoints: {
      622: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1000: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1430: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      1900: {
        slidesPerView: 6,
        spaceBetween: 60
      },
      5000: {
        slidesPerView: 8,
        spaceBetween: 80
      }
    },
    observer: true
  };

  constructor() { }

  ngOnInit() {
  }

  addToCart(code: string) {
    console.log("add to cart product " + code);
  }

  goToDetails(code:string){
    console.log("item " + code + " detail");
  }
}
