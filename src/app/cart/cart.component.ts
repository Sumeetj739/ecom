import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems :any[] = [];



  constructor(private cartserv :CardService, private router :Router) { }

  ngOnInit(): void {
    this.cartItems = this.cartserv.myProducts
  }

  // Update cart item quantity
  updateCart(item:any) {
    if (item.quantity < 1) {
      item.quantity = 1;
    }
    console.log('Cart updated', item);
  }

  // Remove item from cart
  removeItem(item:any) {
    // this.cartItems = this.cartItems.filter(Arrayitem  => Arrayitem.productId !== item.productId);

    this.cartserv.removePrduct(item)

  }

  // Calculate total price
  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.productPrice * item.quantity, 0);
  }

  // Proceed to checkout (can be linked to further logic)
  checkout() {
    if (this.cartItems.length > 0) {
      alert('Proceeding to checkout with total: ' + this.getTotalPrice());
      // Further logic for checkout could go here

      this.router.navigate(['/payment'])
    }
  }
}
