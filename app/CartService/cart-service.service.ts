import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: { id: number; name: string; price: number; }[] = [];

  addToCart(product: { id: number; name: string; price: number; }) {
    this.cartItems.push(product);
  }

  getCartItems() {
    return this.cartItems;
  }
}
