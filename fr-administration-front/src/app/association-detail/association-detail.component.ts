import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-association-detail',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './association-detail.component.html',
  styleUrl: './association-detail.component.scss'
})

export class AssociationDetailComponent implements OnInit {
  association: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const associationId = params.get('id');
      this.http.get(`http://localhost:3000/associations/${associationId}`)
        .subscribe(response => {
          this.association = response;
        });
    });
  }
}