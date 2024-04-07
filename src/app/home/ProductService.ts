import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';
import { MOCK_PRODUCTS } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = MOCK_PRODUCTS;

  constructor() {}

  getProductsMini(): Observable<Product[]> {
    return of(this.products);
  }

  updateProduct(product: Product): Observable<Product | null> {
    console.log(product);
    
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index] = product;
      return of(product);
    }
    return of(null); 
  }
}
