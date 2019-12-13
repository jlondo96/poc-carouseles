import { Component, OnInit, Input, HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-ngx-owl-carousel-o',
  templateUrl: './ngx-owl-carousel-o.component.html',
  styleUrls: ['./ngx-owl-carousel-o.component.scss']
})
export class NgxOwlCarouselOComponent implements OnInit {

  @Input() data: any[any];
  @Input() config: OwlOptions = {};
  @Input() imagesCarousel: boolean;
  @Input() productsCarousel: boolean;
  @Input() categoryCarousel: boolean;

  constructor() {
  }

  ngOnInit() {
  }
  
  goToDetails(code: any) {}
}
