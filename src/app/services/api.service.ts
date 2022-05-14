import { Injectable } from '@angular/core';
import { ProductData } from '../data/product-data';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private static LoadDefaultData:boolean = true;
  public static products: ProductData[] = [];
  public static currentPage: string = 'home';

  constructor(private http: HttpClient) { 
    if(ApiService.LoadDefaultData){
      this.addDefaultData();
      ApiService.LoadDefaultData = false;
    }
  }

  private addDefaultData(){
    this.getAllProducts();
  }

  private sendRequest():Promise<any> {
    var promise = this.http.get<{id: number, name: string, color: string, Size: number, price: number, describe: string, image: string}[]>('./assets/products.json').toPromise();
    return Promise.resolve(promise);
  }

  getAllProducts():Promise<void> {
    return this.sendRequest().then((data) => {
      return data.map((product: any) => {
        ApiService.products.push(new ProductData(product));
      }); 
    });
  }
  setCurrentPage(page:string) {
    ApiService.currentPage = page;
    console.log(ApiService.currentPage);
  }
}
