import { Component, OnInit, Input} from '@angular/core';
import { ProductData } from 'src/app/data/product-data';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: []
})

export class CarouselComponent implements OnInit  {
  @Input() gesture: String;
  @Input() products: ProductData[];
  @Input() imgs: string[];
  @Input() carouselId: string;
  qty:number = 1;
  @Input() currentActive: number;
  private runInterval: any = null;
  
  constructor(private apiService: ApiService, private cartService: CartService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(){
    
  }

  increaseQty() {
    if(this.qty < 100)
      this.qty++;
    this.toastr.info("Qty has been increased by 1","",{timeOut: 1500});
      
  }

  decreaseQty(){
    if(this.qty > 1)
      this.qty--;
    this.toastr.info("Qty has been decreased by 1","",{timeOut: 1500});
  }

  addToCart(){
    this.cartService.addToCart(this.currentActive, this.qty);
    this.toastr.success("successfully added to cart","",{timeOut: 1500});
  }

}
