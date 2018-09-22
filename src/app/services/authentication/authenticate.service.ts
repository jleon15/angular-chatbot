import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Treatment} from '../../model/Treatment';

@Injectable()
export class AuthenticateService {

  static readonly LOGIN_URL = 'http://localhost:8080/ws/login';
  static readonly LOGOUT_URL = 'http://localhost:8080/ws/logout';
  static readonly LOGGED_IN_URL = 'http://localhost:8080/ws/loggedIn';
  static readonly AUTHENTICATED_URL = 'http://localhost:8080/ws/';
  static readonly REGISTER_CHILD_URL = 'http://localhost:8080/ws/child';

  constructor(private http: HttpClient) {
  }

  /**
   * Returns an observable that tries to log in the user using the log in web service
   */
  login(username: string, password: string, organizationIdentifier: string) {
    const body = `username=${username}&password=${password}&organizationIdentifier=${organizationIdentifier}`;
    return this.http
      .post(AuthenticateService.LOGIN_URL, body, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}, withCredentials: true});
  }

  registerChild(fullName: string, username: string, age: string,
                gender: string, treatments: string, diseases: string, ethnicity: string, relation: string): Promise<any> {
    const bodyParameters = `fullName=${fullName}&username=${username}&age=${age}&gender=${gender}&treatments=${treatments}
      &diseases=${diseases}&ethnicity=${ethnicity}&relation=${relation}`;
    console.log(bodyParameters);
    return this.http
      .post(AuthenticateService.REGISTER_CHILD_URL, bodyParameters,
        {headers: {'Content-Type': 'application/x-www-form-urlencoded'}, withCredentials: true}).toPromise();
  }

  /**
   * Returns a promise to return if the user is logged in or not it compares the string sent by the logged in
   * web service to determine if the user is logged in
   */
  isLoggedIn(): Promise<boolean> {
    return this.http.get(AuthenticateService.LOGGED_IN_URL, {withCredentials: true})
      .toPromise()
      .then(response => {
        return response === true;
      });
  }

  getLoggedInUserInfo(): Promise<any> {
    return this.http.get<any>(AuthenticateService.AUTHENTICATED_URL, {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      withCredentials: true
    }).toPromise();
  }

  logout(): Promise<any> {
    return this.http
      .post(AuthenticateService.LOGOUT_URL, null, {headers: null, withCredentials: true}).toPromise();
  }
}
