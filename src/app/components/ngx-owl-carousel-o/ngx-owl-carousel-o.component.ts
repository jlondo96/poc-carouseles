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
  @Input() config2: OwlOptions = {};
  @Input() config3: OwlOptions = {};
  @Input() config4: OwlOptions = {};
  options1: OwlOptions = {};
  options2: OwlOptions = {};
  options3: OwlOptions = {};
  options4: OwlOptions = {};

  constructor() {
  }

  ngOnInit() {
    this.options1 = this.config;
    this.options2 = this.config2;
    this.options3 = this.config3;
    this.options4 = this.config4;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.ngOnInit();
  }
}
