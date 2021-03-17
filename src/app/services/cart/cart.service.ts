import { Injectable } from '@angular/core';
import { CartItems } from 'src/app/models/cart/carItems';
import { CartItem } from 'src/app/models/cart/cartItem';
import { Product } from 'src/app/models/product/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(data: Product) {
    let item = CartItems.find((c) => c.product.productId === data.productId);
    if (item) {
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.product = data;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }

  removeFromCart(product: Product) {
    let item: CartItem = CartItems.find(
      (c) => c.product.productId === product.productId
    );
    CartItems.splice(CartItems.indexOf(item), 1);
  }

  list(): CartItem[] {
    return CartItems;
  }
}
