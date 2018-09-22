import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthenticationService {

  private loginUrl: string = 'http://localhost:8080/ws/login';
  private loggedInUrl: string = 'http://ws.talent.cr/ws/user/loggedIn';
  private authenticatedUrl: string = 'http://ws.talent.cr/ws/user/authenticated';

  constructor(private http: HttpClient) { }

  /**
   * Returns an observable that tries to log in the user using the log in web service
   */
  login(username: string, password: string, organizationIdentifier: string) {
    const body = `username=${username}&password=${password}&organizationIdentifier=${organizationIdentifier}`;
    return this.http
      .post(this.loginUrl, body, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, withCredentials: true } );
  }

  /**
   * Returns a promise to return if the user is logged in or not it compares the string sent by the logged in
   * web service to determine if the user is logged in
   */
  isLoggedIn(): Promise<boolean> {
    return this.http.get(this.loggedInUrl, { withCredentials: true })
      .toPromise()
      .then(response => {
        return response == true;
      });
  }

  storeUser(): Promise<any> {
    return this.http.get<any>(this.authenticatedUrl, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      withCredentials: true })
      .toPromise();
  }

}
