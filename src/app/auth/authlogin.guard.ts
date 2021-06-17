// src/app/auth/auth-guard.service.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token-storage.service';
@Injectable()
export class AuthLoginGuardService implements CanActivate {
  info: any;

  constructor(public auth: AuthService, public router: Router,private tokenStorage: TokenStorageService) {}
  canActivate(): boolean {
    if (this.tokenStorage.getToken()) {
          this.router.navigate(['/application/dashboard']);
      return false;
    } 
            return true;      
}
}