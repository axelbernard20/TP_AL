import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, Router],
    });

    authGuard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should return true when user is logged in', () => {
    spyOn(authGuard, 'canActivate').and.returnValue(true);
    const result = authGuard.canActivate();
    expect(result).toBe(true);
  });

  it('should navigate to /login when user is not logged in', () => {
    spyOn(authGuard, 'canActivate').and.returnValue(false);
    const navigateSpy = spyOn(router, 'navigateByUrl');
    
    authGuard.canActivate();

    expect(navigateSpy).toHaveBeenCalledWith('/login');
  });
});
