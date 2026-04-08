import { TestBed } from '@angular/core/testing';
import { CarouselService } from './carousel.service';
import { HttpClientModule } from '@angular/common/http';

describe('CarouselService', () => {
  let service: CarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add item to cart', () => {
    const item = { img: 'test.jpg', name: 'Test', price: '$10', code: '1' };
    service.addToCart(item);
    expect(service.cartCount$.getValue()).toBe(1);
  });

  it('should remove item from cart', () => {
    const item = { img: 'test.jpg', name: 'Test', price: '$10', code: '1' };
    service.addToCart(item);
    service.removeFromCart('1');
    expect(service.cartCount$.getValue()).toBe(0);
  });
});
