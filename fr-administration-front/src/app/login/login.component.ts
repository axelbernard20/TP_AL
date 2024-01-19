import { Component } from '@angular/core';
import { ApiHelperService } from '../services/api-helper.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  constructor(
    private api: ApiHelperService,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) { }
  
  login(): void {
    const username: string = (document.getElementById('username') as HTMLInputElement).value;
    const password: string = (document.getElementById('password') as HTMLInputElement).value;
  
    this.api.post({ endpoint: '/auth/login', data: { username, password } })
      .then(response => {
        if (response.access_token) {
          this.tokenStorageService.save(response.access_token, username);
          console.log("Login success!");
          this.router.navigateByUrl("/users");
        } else {
          console.log("Invalid username or password");
        }
      })
      .catch(error => {
        console.error("An error occurred during login:", error);
      });
  }
}
