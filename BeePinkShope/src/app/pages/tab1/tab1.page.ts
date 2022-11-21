import { Component } from '@angular/core';
import { ApirestService } from '../../services/apirest.service';
import { Router } from '@angular/router'
import { Product } from 'src/app/interfaces';
import { IProduct } from 'src/app/interface/i-product.interface';
import { ShoppingCartServiceService } from 'src/app/services/shopping-cart-service.service';
import { FavoritosService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  products:IProduct[]=[];
  getimagen:any[]=[];


  constructor(public _services: ApirestService, private router: Router, private carritoServicio: ShoppingCartServiceService, private favoritosServicio: FavoritosService) {
    this._services.getdata("").subscribe(data=>{
      this.products = data
      console.log(this.products)
    })

  }

  async carrito(){
    this.router.navigate(['/carrito'])
  }

  addProduct(producto: IProduct) {
    this.carritoServicio.addProduct(producto)
  }

  addFavorito(producto: IProduct) {
    this.favoritosServicio.addProduct(producto);
  }

  async favoritos() {
    this.router.navigate(['/favoritos'])
  }

  async productos() {
    this.router.navigate(['/favoritos'])
  }



}
