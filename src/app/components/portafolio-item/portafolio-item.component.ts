import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html',
  styles: []
})
export class PortafolioItemComponent {

  constructor(private route:ActivatedRoute) {

    route.params.subscribe (
      parameters =>{
        console.log(parameters);
        console.log(parameters['id']);
      });
   }
}
