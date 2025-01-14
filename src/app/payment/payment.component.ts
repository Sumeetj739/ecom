import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentDetails = {
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  };
  cartItems: any[] = [];
  paymentSuccess = false;

  constructor(private cartserv : CardService) {}

  ngOnInit(): void {
    // Simulate fetching cart items (normally from a service or API)
    this.cartItems = [
      { name: 'Product 1', quantity: 1, price: 59.99 },
      { name: 'Product 2', quantity: 2, price: 39.99 },
    ];

    this.cartserv.myProducts
  }

  // Calculate total cost of the items in the cart
  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
  }

  // Simulate payment processing
  processPayment(): void {
    // Simulate successful payment processing
    console.log('Payment details:', this.paymentDetails);
    this.paymentSuccess = true;

    // In a real-world app, you'd call an API here to process the payment
    // and then handle the response (success/failure).
  }
}
