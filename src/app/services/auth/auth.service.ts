import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from 'src/app/models/auth/loginModel';
import { TokenModel } from 'src/app/models/auth/tokenModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://localhost:44306/api/auth/';
  constructor(private httpClient: HttpClient) {}

  login(loginModel: LoginModel):Observable<SingleResponseModel<TokenModel>>{
    let newUrl = this.apiUrl + 'login';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newUrl, loginModel);
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
