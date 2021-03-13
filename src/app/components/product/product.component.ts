import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  // Bir metot observable donduruyorsa subscribe olmaliyiz
  ngOnInit(): void {
    // this.getProducts();
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId']) {
        this.getProductsByCategory(params['categoryId']);
      } else {
        this.getProducts();
      }
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = response.success;
    }); //--> Bu sekilde yazilmasinin sebebi apinin asenkron calismasi
  }

  getProductsByCategory(categoryId: number) {
    this.productService
      .getProductsByCategory(categoryId)
      .subscribe((response) => {
        this.products = response.data;
        this.dataLoaded = response.success;
      }); //--> Bu sekilde yazilmasinin sebebi apinin asenkron calismasi
  }
}
