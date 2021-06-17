import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthLoginInfo } from '../auth/login-info';
import { Router }          from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  checkroles: any ;
  durationInSeconds = 5;
  token:string;
  email:string;
  private loginInfo: AuthLoginInfo;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    //  this.roles = this.tokenStorage.getAuthorities();
    }
  }

  onSubmit() {

    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.token = data.idFournisseur;

        this.tokenStorage.saveToken(data.token);


        this.isLoginFailed = false;
        this.isLoggedIn = true;
       
        this.router.navigate(['application/dashboard']);
       
  
     //   this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
        this._snackBar.openFromComponent(ErrorComponent, {
          duration: this.durationInSeconds * 1000,
        });
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

  


}


@Component({
  selector: 'error-message',
  templateUrl: 'error-message.html',
  styles: [`
    .color{
      color: red;
    }
  `],
})
export class ErrorComponent {}




