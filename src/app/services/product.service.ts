import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import {map} from 'rxjs';
import { ProductCategory } from '../common/product-category';
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private categoryUrl='http://localhost:8081/api/product-category';

  private baseUrl ='http://localhost:8081/api/products';

  constructor(private httpClient: HttpClient) { }

getProductsListByCategory(theCategoryId: number): Observable<Product[]> {

  const searchUrl =`${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;
  // 'http://localhost:8081/api/products/search/findByCategory?id=${theCategoryId}';
  return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
    map(response => response._embedded.products)
  );
  }

getProductsList(theCategoryId: number): Observable<Product[]> {
  return this.httpClient.get<GetResponseProducts>(this.baseUrl).pipe(
    map(response => response._embedded.products)
  );
}
getProductCategories(): Observable<ProductCategory []> {
  return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
    map(response => response._embedded.productsCategory)
  );
}
}


interface GetResponseProducts{
  _embedded:{
    products: Product[];
  }
}

interface GetResponseProductCategory{
  _embedded:{
    productsCategory: ProductCategory[];
  }
}