import { Component } from '@angular/core';
import { ApirestService } from '../../services/apirest.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  getdata:any[]=[];
  getimagen:any[]=[];

  constructor(public _services: ApirestService) {
    this._services.getdata<any[]>("").subscribe(data=>{
      this.getdata = data
      console.log(this.getdata)
    }),
      this._services.getimagen<any[]>("").subscribe(data => {
        this.getimagen = data
        console.log(this.getimagen)
      })
  }
}
