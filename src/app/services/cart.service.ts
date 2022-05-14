import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart: Map<number, any> = new Map<number, any>();
  constructor() { }

  getCart() {
    return this.cart;
  }

  addToCart(id:number, quantity: number){
    if(this.cart.get(id) !== undefined)
      this.cart.set(id, this.cart.get(id) + quantity);
    else {
      this.cart.set(id,quantity);
    }
    console.log(this.cart);
  }

  removeFromCart(id:number){
    this.cart.delete(id);
  } 

  clearCart() {
    this.cart = new Map<number, any>();
  }

}
