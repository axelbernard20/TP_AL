import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private tokenStorageService: TokenStorageService, private router: Router) {}

  canActivate(): boolean {
    if (this.tokenStorageService.isLogged()) {
      console.log("AuthGard : true");
      return true;
    }

    console.log("AuthGard : false");
    this.router.navigateByUrl('/login');
    return false;
  }
}

export const authGuardProvider = {
  provide: 'AuthGuard',
  useValue: AuthGuard,
};
