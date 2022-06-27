import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  a:number[] = [1,2,3,4,5,6,7,8,9];
  products: Product[]
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.listProducts();
  }

listProducts(){
  this.productService.getProductsList().subscribe(
    data => {
      this.products=data;
    }
  )
}

}
