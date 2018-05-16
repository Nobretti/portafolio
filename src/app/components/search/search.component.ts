import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  finish:string = undefined;

  constructor(private route:ActivatedRoute, public _ps:ProductsService) {

    route.params.subscribe ( parameters => {
        this.finish = parameters['finish'];
        _ps.search_procuts(this.finish);
    });
  }
}
