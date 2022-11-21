import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/i-product.interface';
import {FavoritosService } from 'src/app/services/favorites.service';
import { Product } from '../../interfaces';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  productosCarrito: IProduct[] = [];
  constructor(private favoritosService: FavoritosService) { }

  ngOnInit(): void {
    this.productosCarrito = this.favoritosService.getProducts();
    this.favoritosService.getProducs$().subscribe((productos) => {
      this.productosCarrito = productos;
    })
  }

  eliminarProducto(id: number) {
    this.favoritosService.removeProduct(id);
  }

}
