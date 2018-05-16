import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html',
  styles: []
})
export class PortafolioItemComponent {

  product:any = undefined;
  cod:string = undefined;

  constructor(private route:ActivatedRoute,
              private _ps:ProductsService) {

    route.params.subscribe (
      parameters =>{
        _ps.load_ProductItem(parameters['id'])
          .subscribe(res => {
            this.cod = parameters['id'];
            this.product = res.json();
          });
      });
   }
}
