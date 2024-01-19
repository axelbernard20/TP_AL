import { Component } from '@angular/core';
import { ApiHelperService } from '../services/api-helper.service';
import { Router } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-user-delete',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './user-delete.component.html',
  styleUrl: './user-delete.component.scss'
})
export class UserDeleteComponent {


  constructor(
    private api : ApiHelperService,
    private router : Router
  ) {}

  deleteUser(): void{
    const id: string = (document.getElementById('id') as HTMLInputElement).value;
    
    /*
    this.api.delete(`/users/${id}`)
      .then(() => {
        console.log('User deleted successfully!');
        this.router.navigateByUrl('/users');
      })
      .catch(error => {
        console.error('An error occurred during user deletion:', error);
      });
    }
    */

  }
}
