import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-ngx-owl-carousel',
  templateUrl: './ngx-owl-carousel.component.html',
  styleUrls: ['./ngx-owl-carousel.component.scss']
})
export class NgxOwlCarouselComponent implements OnInit {

  @Input() data: any[any];

  constructor() { }

  ngOnInit() {
  }

}
