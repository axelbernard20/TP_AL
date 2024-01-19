import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isLogged: boolean = false;

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    // Initialise la valeur de isLogged en fonction de l'état de l'authentification
    this.isLogged = this.tokenStorageService.isLogged();
  }

  logout(): void {
    console.log("Click on logout!");
    
    this.tokenStorageService.clear();

    this.router.navigateByUrl("/login");
  }

  redirectToProfile(): void {
    this.router.navigateByUrl("/users/profil");
  }

  redirectToUsersList(): void {
    this.router.navigateByUrl("/users");
  }

  redirectToAssociationsList(): void {
    this.router.navigateByUrl("/associations");
  }

  redirectToRecherches(): void {
    this.router.navigateByUrl("/recherches");
  }
}
