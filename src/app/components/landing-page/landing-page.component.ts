import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {

  private static EMAIL_REGEX: RegExp = new RegExp('^(?!.*(\\.)\\1)([a-z0-9])+([a-z0-9]|\\-|\\.|\\_)+[a-z0-9]@(?!.*(\\.[a-z]\\.[a-z]))((?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)[a-z0-9](?:[a-z0-9]*[a-z0-9])?)([a-z0-9]+)$');
  private static ID_REGEX: RegExp = new RegExp('/^[1-9]-?\\d{4}-?\\d{4}$/');
  private static PASSWORD_REGEX: RegExp = new RegExp ('^(?!.*(.)\\1)(?=.*([A-Z]))(?=.*([a-z]))(?=.*(\\!|\\@|\\$|\\%|\\*|\\(|\\)|\\<|\\>|\\?|\\:|\\{|\\}|\\+|\\‐|\\~))([a-z]|[A-Z]|(\\!|\\@|\\$|\\%|\\*|\\(|\\)|\\<|\\>|\\?|\\:|\\{|\\}|\\+|\\‐|\\~)){7,}');
  private static NAME_REGEX: RegExp = new RegExp('^(([A-Z][a-z]+)(\\ )?)*([A-Z][a-z]+)$');
  private static PHONE_NUMBER_REGEX: RegExp = new RegExp('[0-9]{8}');


  public emailIsValid: boolean;
  public phoneIsValid: boolean;
  public nameIsValid: boolean;
  public passwordIsValid: boolean;
  public IDIsValid: boolean;
  private invalidCredentials: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService) {
    this.emailIsValid = true;
    this.phoneIsValid = true;
    this.nameIsValid = true;
    this.passwordIsValid = true;
    this.IDIsValid = true;
    this.invalidCredentials = false;
  }

  ngOnInit() {
  }

  signUp(name: string, email: string, id: string, phone: string, password: string) {
    this.authenticationService.signUp(name, email, id, phone, password).subscribe(() => {
      this.router.navigate(['/chat']);
      location.reload();
    }, () => this.invalidCredentials = true);
  }

  validateEmail(email: string, event: any) {
    if (event.type == 'keyup' && !this.emailIsValid) {
      // only validate email on keyup if it has been identified as invalid
      this.emailIsValid = LandingPageComponent.EMAIL_REGEX.test(email);
      if (email.length < 7 || email.length > 256) {
        this.emailIsValid = false;
      }
    } else if (event.type == 'blur') { // always validate the email on blur
      this.emailIsValid = LandingPageComponent.EMAIL_REGEX.test(email);
      if (email.length < 7 || email.length > 256) {
        this.emailIsValid = false;
      }
    }
  }

  validateCompleteName(name: string, event: any) {
    if (event.type == 'keyup' && !this.nameIsValid) {
      // only validate email on keyup if it has been identified as invalid
      this.nameIsValid = LandingPageComponent.NAME_REGEX.test(name);
    } else if (event.type == 'blur') { // always validate the email on blur
      this.nameIsValid = LandingPageComponent.NAME_REGEX.test(name);
    }
  }

  validatePhone(phone: string, event: any) {
    if (event.type == 'keyup' && !this.phoneIsValid) {
      // only validate email on keyup if it has been identified as invalid
      this.phoneIsValid = LandingPageComponent.PHONE_NUMBER_REGEX.test(phone);
    } else if (event.type == 'blur') { // always validate the email on blur
      this.phoneIsValid = LandingPageComponent.PHONE_NUMBER_REGEX.test(phone);
    }
  }

  validatePassword(password: string, event: any) {
    if (event.type == 'keyup' && !this.passwordIsValid) {
      // only validate email on keyup if it has been identified as invalid
      this.passwordIsValid = LandingPageComponent.PASSWORD_REGEX.test(password);
    } else if (event.type == 'blur') { // always validate the email on blur
      this.passwordIsValid = LandingPageComponent.PASSWORD_REGEX.test(password);
    }
  }

  validateIDNumber(id: string, event: any) {
    if (event.type == 'keyup' && !this.IDIsValid) {
      // only validate email on keyup if it has been identified as invalid
      this.IDIsValid = LandingPageComponent.ID_REGEX.test(id);
    } else if (event.type == 'blur') { // always validate the email on blur
      this.IDIsValid = LandingPageComponent.ID_REGEX.test(id);
    }
  }

  clearSignUpError() {
    this.invalidCredentials = false;
  }

}
