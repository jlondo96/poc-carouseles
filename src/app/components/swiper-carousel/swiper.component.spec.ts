import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperCarouselComponent } from './swiper.component';

describe('SwiperComponent', () => {
  let component: SwiperCarouselComponent;
  let fixture: ComponentFixture<SwiperCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiperCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
