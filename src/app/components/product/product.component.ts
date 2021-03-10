import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;
  // httpclient'i kullanmak icin enjekte etmen gerekiyor
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log('init calisti');
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    }); //--> Bu sekilde yazilmasinin sebebi apinin asenkron calismasi
  }
}
