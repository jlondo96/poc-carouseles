import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHmCarouselComponent } from './ngx-hm-carousel.component';

describe('NgxHmCarouselComponent', () => {
  let component: NgxHmCarouselComponent;
  let fixture: ComponentFixture<NgxHmCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxHmCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxHmCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
