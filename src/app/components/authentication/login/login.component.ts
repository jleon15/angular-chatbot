import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private static ID_REGEX: RegExp = new RegExp('^[0-9]{9,10}$');
  public IDIsValid: boolean;
  private invalidCredentials: boolean;
  private organizationIdentifier: string;

  constructor(private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService) {
    this.IDIsValid = true;
    this.invalidCredentials = false;
  }

  ngOnInit() {
  }

  /**
   * Tries to log in the user using the supplied email and password, redirects to the dashboard page on success
   * and stores the user on local storage, on error it sets invalid credentials to true so the error message is
   * displayed
   * on error it sets invalid credentials to true
   * @param email the email entered in the email field
   * @param password the password entered in the password field
   */
  public login(id: string, password: string) {
    this.authenticationService.login(id, password)
      .subscribe(() => {
        this.router.navigate(['/chat']);
        location.reload();
      }, () => this.invalidCredentials = true);
  }

  /**
   * Uses a regular expression to validate the email provided by the user
   * @param email the email the user entered in the email field
   */
  validateIDNumber(id: string, event: any) {
    if (event.type == 'keyup' && !this.IDIsValid) {
      // only validate email on keyup if it has been identified as invalid
      this.IDIsValid = LoginComponent.ID_REGEX.test(id);
    } else if (event.type == 'blur') { // always validate the email on blur
      this.IDIsValid = LoginComponent.ID_REGEX.test(id);
    }
  }

  /**
   * Clears the sign in error message, used when the email or password fields are updated
   */
  clearSignInError() {
    this.invalidCredentials = false;
  }

}
