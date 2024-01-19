import { Component } from '@angular/core';
import { ApiHelperService } from '../services/api-helper.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update',
  standalone: true,
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  imports: [FormsModule]
})
export class UpdateComponent {
  user: any;
  userData: any = {};
  dataSource = [];
  
  constructor(
    private api: ApiHelperService,
    private router: Router,
    private token: TokenStorageService,
    private http: HttpClient
  ) { }

  update(): void {
    const id = this.token.getUserId();
    this.userData = {
      firstname: (document.getElementById('firstName') as HTMLInputElement).value,
      lastname: (document.getElementById('lastName') as HTMLInputElement).value,
      age: +(document.getElementById('age') as HTMLInputElement).value,
      password: (document.getElementById('password') as HTMLInputElement).value,
    };

    console.log('Updating user n0 : ' + id);
    this.api.put({ endpoint: `/users/${id}`, data: this.userData })
      .then(() => {
        console.log('User updated!');
        this.router.navigateByUrl('/users/profil');
      })
      .catch(error => {
        console.error('An error occurred during update:', error);
      });
  }
}
