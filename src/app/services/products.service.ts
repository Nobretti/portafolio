import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductsService {

  products:any[] = [];
  loading_products: boolean = false;

  constructor( private http:Http) {
    this.load_Products();
  }

  public load_Products(){

    this.loading_products = true;

    this.http.get('https://web-page-33deb.firebaseio.com/productos_idx.json')
            .subscribe( res => {
              console.log(res.json());
              this.loading_products = false;
            });
  }
}
