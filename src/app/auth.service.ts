import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class  AuthService {
  constructor() {}

  // Simulate a login API call (you would call your backend API here)
  login(username: string, password: number): boolean {
    // Simulating success response
    if (username == 'abc@gmail.com' && password == 1234) {
      // Save the session (can be JWT token or user info)
      localStorage.setItem('userSession', JSON.stringify({ username }));
      return true;
    }
    return false;
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return localStorage.getItem('userSession') !== null;
  }

  // Logout
  logout(): void {
    localStorage.removeItem('userSession');
  }
}
