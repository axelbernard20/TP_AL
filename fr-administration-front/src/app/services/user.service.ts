import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';  // Importez le service TokenStorage

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) {}

  getUserProfile(userId: string): Observable<any> {
    userId = this.tokenStorageService.getUserId();  // Utilisez le service TokenStorage pour obtenir l'ID
    return this.http.get(`${this.apiUrl}/users/${userId}`);
  }

    updateUserProfile(userId: string, data: any): Observable<any> {
        userId = this.tokenStorageService.getUserId();  // Utilisez le service TokenStorage pour obtenir l'ID
        return this.http.put(`${this.apiUrl}/users/${userId}`, data);
    }
}
