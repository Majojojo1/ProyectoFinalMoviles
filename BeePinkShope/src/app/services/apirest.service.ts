import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  constructor(public _http: HttpClient) {

   }

  getdata<T>(url : string){
    url = 'http://18.219.169.226:8000/productos'
      return this._http.get<T[]>(url)
  }

}
