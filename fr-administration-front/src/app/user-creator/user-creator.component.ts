import { Component } from '@angular/core';
import { ApiHelperService } from '../services/api-helper.service';
import { Router } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-user-creator',
  standalone: true,
  templateUrl: './user-creator.component.html',
  styleUrls: ['./user-creator.component.scss'],
  imports: [NavComponent]
})
export class UserCreatorComponent {
  userData: any = {};

  constructor(
    private api: ApiHelperService,
    private router: Router
  ) {}

  createUser(): void {
    this.userData = {
      password: (document.getElementById('password') as HTMLInputElement).value,
      firstname: (document.getElementById('firstname') as HTMLInputElement).value,
      lastname: (document.getElementById('lastname') as HTMLInputElement).value,
      age: +(document.getElementById('age') as HTMLInputElement).value
    };

    console.log('Creating user:', this.userData);

    this.api.post({endpoint:'/users', data: this.userData})
      .then(() => {
        console.log('User created successfully!');
        this.router.navigateByUrl('/users');
      })
      .catch(error => {
        console.error('An error occurred during user creation:', error);
      });
  }
}
