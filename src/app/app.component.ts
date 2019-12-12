import { Component } from '@angular/core';
import data from './data/data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  itemsData = data;
  itemsLenght = 5;
  config1 = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 10,
    navSpeed: 700,
    /*navText: ['', ''],*/
    nav: false,
    autoplay: true,
    autoplayTimeout: 1500,
    responsive: {
      0: {
        items: 1.5
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      1000: {
        items: 2.3,
        nav: true
      }
    },
  };

  config2 = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 10,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 2.3
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      1000: {
        items: 3,
        nav: true
      }
    },
  };


  config3 = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 10,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 2500,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      1000: {
        items: 3,
        nav: true
      }
    },
  };

  config4 = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 10,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 4.3
      },
      400: {
        items: 6,
        loop: false
      },
      740: {
        items: 6,
        loop: false
      },
      940: {
        items: 6,
        loop: false
      }
    },
  };
}
