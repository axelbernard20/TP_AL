import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavComponent } from '../nav/nav.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recherches',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './recherches.component.html',
  styleUrl: './recherches.component.scss'
})


export class RecherchesComponent {

  constructor(
    private http: HttpClient,
    private router: Router
    ) {}

  onSearchUser(): void {
    const idU: string = (document.getElementById('idU') as HTMLInputElement).value;
    this.router.navigateByUrl(`/users/${idU}`);
  }

  onSearchAssociation(): void {
    const idA: string = (document.getElementById('idA') as HTMLInputElement).value;
    this.router.navigateByUrl(`/associations/${idA}`);
  }

}
