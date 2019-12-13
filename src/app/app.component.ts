import { Component } from '@angular/core';
import data from './data/data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  itemsData = data;
  config1 = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 10,
    navSpeed: 700,
    nav: false,
    autoplay: true,
    autoplayTimeout: 1500,
    responsive: {
      0: {
        items: 3
      },
      1000: {
        items: 5
      }
    },
  };

  config2 = {
    stagePadding: 100,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 10,
    navSpeed: 700,
    nav: false,
    autoplay: true,
    autoplayTimeout: 1500,
    responsive: {
      0: {
        items: 2
      },
      1000: {
        items: 4
      }
    },
  };

  config3 = {
    stagePadding: 100,
    center: true,
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
        items: 3
      },
      1000: {
        items: 5
      }
    }
  };


  config4 = {
    center: true,
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
        items: 3
      },
      1000: {
        items: 5
      }
    },
  };

  config5 = {
    center: true,
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
        items: 3
      },
      1000: {
        items: 5
      }
    },
  };
}
