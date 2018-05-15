import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class InformationService {

  info:any = {};
  load:boolean = false;
  loadOverUs:boolean = false;
  team:any[] = [];

  constructor( public http:Http) {
    this.load_info();
    this.load_over_us();
  }

  public load_info(){
    this.http.get("assets/data/info.pages.json")
             .subscribe(data => {
               //console.log(data.json());
               this.load = true;
               this.info = data.json();
             });
  }

  public load_over_us(){
    this.http.get("https://web-page-33deb.firebaseio.com/team.json")
             .subscribe(data => {
               //console.log(data.json());
               this.loadOverUs = true;
               this.team = data.json();
             });
  }
}
