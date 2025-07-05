import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  isSellerLoggeddIn = new BehaviorSubject<boolean>(false);
  isLogdinError = new EventEmitter<boolean>(false);
  constructor(private http: HttpClient, private router: Router) {}

  userSignUp(data: signUp) {
    this.http
      .post('https://database-cxg5.onrender.com/seller', data, { observe: 'response' })
      .subscribe((result: any) => {
        console.warn(result);
        if (result) {
          this.isSellerLoggeddIn.next(true);
          localStorage.setItem(
            'seller',
            JSON.stringify(result.body)
          );
          this.router.navigate(['seller-home']);
          console.warn(result);
        } 
      });
  }

  userLogin(data: login) {
    console.warn(data);
    //api call code will be there
    this.http.get(
        `https://database-cxg5.onrender.com/seller?email=${data.email}&password=${data.password}`,{ observe: 'response' })
      .subscribe((result: any) => {
        console.warn(result);
        if (result && result.body && result.body.length ) {
          localStorage.setItem('seller', JSON.stringify(result.body));
          this.router.navigate(['seller-home']);
          console.warn('user logged in');
        } else {
          console.warn('login failed');
          this.isLogdinError.emit(true);
        }
      });
  }

  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggeddIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
}
