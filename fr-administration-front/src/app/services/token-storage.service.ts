import { Injectable, OnInit } from '@angular/core';

const TOKEN_KEY = 'token';
const USERNAME_KEY = 'username';
const IS_LOGGED_IN = 'isLoggedIn';
const IS_LOGGED = 'true';
const USER_ID_KEY = 'id';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService implements OnInit{
  public clear(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.clear();
    }
  }

  public save(token: string, userId: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USERNAME_KEY);
      localStorage.removeItem(IS_LOGGED_IN);
      localStorage.removeItem(USER_ID_KEY);

      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem(IS_LOGGED_IN, IS_LOGGED);
      localStorage.setItem(USER_ID_KEY, userId);
    }
  }

  public getToken(): string {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem(TOKEN_KEY);
      return token === null ? '' : token;
    }
    return '';
  }

  public getUserId(): string {
    if (typeof localStorage !== 'undefined') {
      const userId = localStorage.getItem(USER_ID_KEY);
      return userId === null ? '' : userId;
    }
    return '';
  }

  public isLogged(): boolean {
    if (typeof localStorage !== 'undefined') {
      return Boolean(localStorage.getItem(IS_LOGGED_IN));
    }
    return false;
  }

  public ngOnInit(): void {
    this.clear();
  }
}
