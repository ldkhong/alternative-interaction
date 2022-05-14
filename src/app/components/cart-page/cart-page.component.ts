import { Component, OnInit } from '@angular/core';
import { ProductData } from 'src/app/data/product-data';
import { PredictionEvent } from 'src/app/prediction-event';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  products: ProductData[];
  items:  Map<number, any> = new Map<number, any>();
  constructor(private apiService: ApiService,private cartService: CartService) { }

  ngOnInit(): void {
    this.apiService.getAllProducts().then((productData)=> {
      this.products = ApiService.products;
      console.log(this.products);
    });

    this.items = this.cartService.getCart();
    console.log(this.items);
  }

  getTotal():number {
    var total = 0;
    for (let [key, value] of this.items.entries()) {
      total += (this.products[key-1].price * value);
    }
    return total;
  }
}
