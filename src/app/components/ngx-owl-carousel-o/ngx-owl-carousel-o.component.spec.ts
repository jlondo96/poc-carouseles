import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOwlCarouselOComponent } from './ngx-owl-carousel-o.component';

describe('NgxOwlCarouselOComponent', () => {
  let component: NgxOwlCarouselOComponent;
  let fixture: ComponentFixture<NgxOwlCarouselOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxOwlCarouselOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxOwlCarouselOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
