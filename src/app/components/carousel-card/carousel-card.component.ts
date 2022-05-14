import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductData } from 'src/app/data/product-data';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css']
})
export class CarouselCardComponent implements OnInit, OnChanges {
  @Input() product: ProductData;
  @Input() img:string;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit(): void {
    
  }

}
