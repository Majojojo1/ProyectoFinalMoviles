import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/i-product.interface';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  private API_URL = 'http://18.219.169.226:8000/productos';
  constructor(public _http: HttpClient) {

   }

  getdata(url : string): Observable<IProduct[]>{
      return this._http.get<IProduct[]>(this.API_URL);
  }

  getProduct(id: number): Observable<IProduct> {
    return this._http.get<IProduct>(this.API_URL + '/' + id);
  }

  getColors(id: number){
    return this._http.get<any[]>(this.API_URL + '/detProduct/' + id);
  }

  getReferencias(id: number, color: string) {
    return this._http.get<any[]>(this.API_URL + '/detReference/' + id + '/' + color);
  }


  getImagenes(id: number, color: string) {
    return this._http.get<any[]>(this.API_URL + '/detMultimedia/' + id + '/' + color);
  }

  

}
