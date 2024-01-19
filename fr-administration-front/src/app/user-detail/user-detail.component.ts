import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})


export class UserDetailComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient
    ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const userId = params.get('id');
      this.http.get(`http://localhost:3000/users/${userId}`)
        .subscribe(response => {
          this.user = response;
        });
    });
  }
}