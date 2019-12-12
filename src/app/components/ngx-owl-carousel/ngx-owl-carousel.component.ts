import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-ngx-owl-carousel',
  templateUrl: './ngx-owl-carousel.component.html',
  styleUrls: ['./ngx-owl-carousel.component.scss']
})
export class NgxOwlCarouselComponent implements OnInit {

  @Input() data: any[any];
  
  options = {
    center: true,
    items: 1,
    dots: false,
    navigation: false,
    loop: true,
    responsive: {
      622: {
        items: 2
      },
      1000: {
        items: 4
      },
      1430: {
        items: 6
      },
      1900: {
        items: 8
      },
      5000: {
        items: 10
      }
    }
  };

  constructor() { }

  ngOnInit() {
  }

  goToDetails(code: any) {}

}
