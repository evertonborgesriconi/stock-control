import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthRequest } from 'src/modules/interfaces/auth/AuthRequest';
import { AuthResponse } from 'src/modules/interfaces/auth/AuthResponse';
import { SignupUserRequest } from 'src/modules/interfaces/user/SignupUserRequest';
import { SignupUserResponse } from 'src/modules/interfaces/user/SignupUserResponse';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  signupUser(requestDatas: SignupUserRequest): Observable<SignupUserResponse> {
    return this.http.post<SignupUserResponse>(
      `${this.API_URL}/user`,
      requestDatas
    );
  }

  authUser(requestDatas: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/auth`, requestDatas);
  }
}
