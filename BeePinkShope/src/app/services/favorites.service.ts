import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { Observable, Subject } from 'rxjs';
import { IProduct } from '../interface/i-product.interface';

@Injectable({
    providedIn: 'root'
})
export class FavoritosService {
    private products: IProduct[] = [];
    private products$: Subject<IProduct[]>
    private KEY: string = 'favoritos';

    constructor() {
        this.products = this.getProducts()
        this.products$ = new Subject();
    }

    getProducts() {
        //const products = <IProduct[]>(
        //  JSON.parse(localStorage.getItem(this.KEY))
        // );
        return this.products;
    }

    addProduct(product: IProduct) {
        this.products.push(product);
        this.products$.next(this.products)
    }

    getProducs$(): Observable<IProduct[]> {
        return this.products$.asObservable();
    }

    removeProduct(id: number) {
        this.products = this.products.filter((product) => {
            return product.id != id
        })
        console.log(this.products);
        this.products$.next(this.products)
    }


}
