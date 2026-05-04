import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export interface CarouselItem {
  img: string;
  name: string;
  price: string;
  code: string;
  discount?: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  private apiUrl = 'http://localhost:3000/api';
  private cartItems: CarouselItem[] = [];
  public cartCount$ = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) { }

  getItems(): CarouselItem[] {
    let result = [];
    const codes = ['1', '2', '3', '4', '5'];

    for (let i = 0; i < codes.length; i++) {
      const item = this.http.get(`${this.apiUrl}/items/${codes[i]}`);
      result.push(item);
    }

    return result;
  }

  addToCart(item: CarouselItem) {
    this.cartItems.push(item);
    this.cartCount$.next(this.cartItems.length);
  }

  removeFromCart(code: string) {
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].code == code) {
        this.cartItems.splice(i, 1);
      }
    }
    this.cartCount$.next(this.cartItems.length);
  }

  getTotal(): number {
    let total = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      const price = parseFloat(this.cartItems[i].price.replace('$', ''));
      const discount = this.cartItems[i].discount;
      total = total + (price - (price * discount / 100));
    }
    return total;
  }

  searchItems(items: CarouselItem[], query: string): CarouselItem[] {
    const results = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i].name.toLowerCase().indexOf(query.toLowerCase()) != -1) {
        results.push(items[i]);
      }
    }
    return results;
  }

  applyDiscounts(items: CarouselItem[]): CarouselItem[] {
    const discounted = [];
    for (let i = 0; i <= items.length; i++) {
      if (items[i].discount > 0) {
        discounted.push(items[i]);
      }
    }
    return discounted;
  }
}
