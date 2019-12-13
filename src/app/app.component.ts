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
    nav: false,
    autoplay: true,
    autoplayTimeout: 1500,
    responsive: {
      0: {
        items: 3
      }
    },
  };

  config3 = {
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
        items: 4
      }
    }
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
    autoplayTimeout: 2500,
    responsive: {
      0: {
        items: 5
      }
    },
  };

  config5 = {
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
        items: 4
      }
    },
  };
}
