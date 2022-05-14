import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { PredictionEvent } from '../../prediction-event';
import { ProductData } from '../../data/product-data';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-route-page',
  templateUrl: './route-page.component.html',
  styleUrls: ['./route-page.component.css']
})
export class RoutePageComponent implements OnInit, OnChanges {
  @Input() gesture: String = "";
  @Input() currentPage: string;
  @Input() currentId: number;
  @Input() products: ProductData[];
  constructor(private route: ActivatedRoute, private apiService: ApiService,private cartService: CartService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("single " + this.currentId)
  }

  ngOnInit(): void {
    
  }


  
 
}
