import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class InformationService {

  info:any = {};
  load:boolean = false;

  constructor( public http:Http) {
    this.http.get("assets/data/info.pages.json")
             .subscribe(data => {
               console.log(data.json());
               this.load = true;
               this.info = data.json();
             })
  }

}
