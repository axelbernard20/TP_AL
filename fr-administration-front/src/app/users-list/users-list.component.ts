import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Observable,lastValueFrom } from 'rxjs';
import { NavComponent } from '../nav/nav.component';
import { UserCreatorComponent } from '../user-creator/user-creator.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [MatTableModule, NavComponent,UserCreatorComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit{
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}
  displayedColumns: string[] = ['id', 'lastname', 'firstname', 'age'];
  dataSource = [];
  ngOnInit(): void {
    const request: Observable<any> = this.http.get('http://localhost:3000/users', { observe: 'response' });
    request.subscribe({ next : (response) => this.dataSource = response.body });
  }
  redirectToCreation(): void {
    this.router.navigateByUrl('create/user');
  }

  redirectToDelete(): void {
    this.router.navigateByUrl('delete/user');
  }
}