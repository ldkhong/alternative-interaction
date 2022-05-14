import { Component, OnInit, ElementRef, OnChanges } from '@angular/core';
import { PredictionEvent } from '../../prediction-event';
import { ProductData } from '../../data/product-data';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  gesture: String = "";
  products: ProductData[];
  currentActive: number;
  currentPage: string;
  pageChange = false;
  show:string;
  constructor(private apiService: ApiService, private el: ElementRef, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getAllProducts().then((productData)=> {
      this.products = ApiService.products;
      console.log(this.products);
    });
    this.currentPage = "allProducts";
    this.show="block";
    this.currentActive = 1;
  }
  
  
  prediction(event: PredictionEvent){
    this.gesture = event.getPrediction();

    if(this.currentPage == "allProducts" && this.pageChange) {
      this.currentActive = 1;
      this.pageChange = false;
    }

    if(this.gesture === "Two Open Hands" || this.gesture === "Two Closed Hands"|| this.gesture === "Hand Pinching" ) {
        if(this.gesture === "Two Open Hands") {
          this.currentPage = 'allProducts';
          this.show="block";
          if(!this.pageChange)
            this.pageChange = true;
        }
        else if(this.gesture === "Two Closed Hands") {
          this.currentPage = 'singleProduct';
          this.show="none";
          this.pageChange = true;
        }
        else if(this.gesture === "Hand Pinching") {
          this.currentPage='cart';
          this.show="none";
          this.pageChange = true;
        }
    }

    if(this.currentPage == "allProducts" || this.currentPage == "singleProduct") {
      if(this.gesture === "Closed Hand") {
        let element:HTMLElement = document.getElementById('prev') as HTMLElement;
        this.goBack();
        element.click();
      }
      else if(this.gesture === "Open Hand") {
        let element:HTMLElement = document.getElementById('next') as HTMLElement;
        this.goNext();
        element.click();
      } 

      else if(this.gesture === "Hand Pointing") {
        //let element = document.querySelectorAll('.carousel-item');
        let element:HTMLElement = document.getElementById('addBtn') as HTMLElement;
        element.click();
      }
      
      else if(this.gesture === "Open Hand and Closed Hand") {
        let element:HTMLElement = document.getElementById('plusBtn') as HTMLElement;
        element.click();
      } 
  
      else if(this.gesture === "Hand Pinching and Closed Hand") {
        let element:HTMLElement = document.getElementById('minusBtn') as HTMLElement;
        element.click();
      }  
    }

  }
  goBack(){
    if(this.currentPage == "allProducts") {
      this.currentActive -= 1;
    if(this.currentActive == 0)
      this.currentActive = this.products.length;  
      console.log("ALL " + this.currentActive);
    }

  }

  goNext(){
    if(this.currentPage == "allProducts") {
      this.currentActive += 1;
    if(this.currentActive > this.products.length)
      this.currentActive = 1;
      console.log("All " + this.currentActive);
    }
  }

  viewCart() {
    this.currentPage= "cart";
    this.show="none";
  }

  allProducts() {
    this.currentPage = "allProducts";
    this.show="block";
    this.currentActive = 1;
  }

  viewDetail() {
    this.show="none";
    this.currentPage = "singleProduct";
  }
}
