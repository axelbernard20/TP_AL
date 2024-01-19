import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import { NavComponent } from '../nav/nav.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-associations-list',
  standalone: true,
  imports: [MatTableModule, NavComponent],
  templateUrl: './associations-list.component.html',
  styleUrls: ['./associations-list.component.scss']
})
export class AssociationsListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'members'];
  dataSource = [];

  constructor(
    private http: HttpClient,
    private router: Router
    ) {}

  ngOnInit(): void {
    const request: Observable<any> = this.http.get('http://localhost:3000/associations', { observe: 'response' });
    request.subscribe({ next: (response) => this.dataSource = response.body });
  }


  redirectToCreation(): void {
    this.router.navigateByUrl('create/association');
  }
}
