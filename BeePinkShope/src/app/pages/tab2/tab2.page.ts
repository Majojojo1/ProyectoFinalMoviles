import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/i-product.interface';
import { ShoppingCartServiceService } from 'src/app/services/shopping-cart-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  productosCarrito: IProduct[] = [];
  constructor(private carrito: ShoppingCartServiceService) {}

  ngOnInit(): void {
    this.productosCarrito = this.carrito.getProducts();
    this.carrito.getProducs$().subscribe((productos) => {
      this.productosCarrito = productos;
    })
  }

  eliminarProducto(id: number) {
    this.carrito.removeProduct(id);
  }

  

}
