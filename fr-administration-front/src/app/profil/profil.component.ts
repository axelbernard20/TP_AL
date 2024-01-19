import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { TokenStorageService } from '../services/token-storage.service';
import { NavComponent } from '../nav/nav.component';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  standalone: true,
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
  imports: [NavComponent],
})
export class ProfilComponent implements OnInit {
  user: any;

  constructor(
    private userService: UserService,
    private token: TokenStorageService,
    private http: HttpClient,
    private router: Router
  ) {}

  dataSource = [];

  ngOnInit(): void {
    const id = this.token.getUserId();
    this.userService.getUserProfile(id).subscribe((data) => {
      this.user = data;
    });
    const request: Observable<any> = this.http.get('http://localhost:3000/users', { observe: 'response' });
    request.subscribe({ next : (response) => this.dataSource = response.body });
  }

  editProfile(): void {
    this.router.navigateByUrl('/users/profil/update');
  }
}
