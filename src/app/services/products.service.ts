import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductsService {

  products:any[] = [];
  products_filtred:any[] = [];
  loading_products: boolean = false;

  constructor( private http:Http) {
    this.load_Products();
  }

  public search_procuts ( finish:string ){

    if(this.products.length === 0){
      this.load_Products().then( () => {
      });
    } else{
      this.filter_products(finish);
    }
  }

  private filter_products(finish:string){

    this.products_filtred = [];

    finish = finish.toLowerCase();

    this.products.forEach( prod => {

      if( prod.categoria.indexOf(finish) >= 0 ||
                      prod.titulo.indexOf(finish) >= 0){
            this.products_filtred.push(prod);
        }
      });
  }

  public load_ProductItem( cod:string ){
    return this.http.get(`https://web-page-33deb.firebaseio.com/productos/${ cod }.json`);
  }

  public load_Products(){

    this.loading_products = true;

    let promess = new Promise( (resolve, reject) =>{

            this.http.get('https://web-page-33deb.firebaseio.com/productos_idx.json')
            .subscribe( res => {

              this.loading_products = false;
              this.products = res.json();
              resolve();
            });
    });

    return promess;
  }
}
