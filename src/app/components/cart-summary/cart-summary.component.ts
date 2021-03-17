import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItems } from 'src/app/models/cart/carItems';
import { CartItem } from 'src/app/models/cart/cartItem';
import { Product } from 'src/app/models/product/product';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent implements OnInit {
  cartItems: CartItem[];
  constructor(
    private cartService: CartService,
    private tostrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cartItems = this.cartService.list();
  }

  removeFromCart(data: Product) {
    this.cartService.removeFromCart(data);
    this.tostrService.success('Deleted from Cart', data.productName);
  }
}
