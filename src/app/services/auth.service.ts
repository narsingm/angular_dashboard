import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInSignal = signal<boolean>(this.checkInitialLoginState());

  readonly isLoggedIn = this.loggedInSignal.asReadonly();

  constructor() {}

  private checkInitialLoginState(): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('isLoggedIn') === 'true';
    }
    return false;
  }

  login(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('isLoggedIn', 'true');
      this.loggedInSignal.set(true);
    }
  }

  logout(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('isLoggedIn');
      this.loggedInSignal.set(false);
    }
  }
}
