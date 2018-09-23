import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticateService} from '../../services/authentication/authenticate.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  private static EMAIL_REGEX: RegExp = new RegExp('^(?!.*(\\.)\\1)([a-z0-9])+([a-z0-9]|\\-|\\.|\\_)+[a-z0-9]@(?!.*(\\.[a-z]\\.[a-z]))((?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)[a-z0-9](?:[a-z0-9]*[a-z0-9])?)([a-z0-9]+)$');
  private static ID_REGEX: RegExp = new RegExp('^[0-9]{9,10}$');
  private static PASSWORD_REGEX: RegExp = new RegExp ('^(?!.*(.)\\1)(?=.*([A-Z]))(?=.*([a-z]))(?=.*([0-9]))(?=.*(\\!|\\@|\\$|\\%|\\*|\\(|\\)|\\<|\\>|\\?|\\:|\\{|\\}|\\+|\\‐|\\~))([a-z]|[A-Z]|(\\!|\\@|\\$|\\%|\\*|\\(|\\)|\\<|\\>|\\?|\\:|\\{|\\}|\\+|\\‐|\\~)|[0-9]){7,}');
  private static NAME_REGEX: RegExp = new RegExp('^(([A-Z][a-z]+)(\\ )?)*([A-Z][a-z]+)$');
  private static PHONE_NUMBER_REGEX: RegExp = new RegExp('^[0-9]{8}$');


  public emailIsValid: boolean;
  public phoneIsValid: boolean;
  public nameIsValid: boolean;
  public passwordIsValid: boolean;
  public IDIsValid: boolean;
  private invalidCredentials: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticateService) {
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
    console.log(email);
    console.log(id);
    console.log(phone);
    console.log(name);
    console.log(password);
    this.authenticationService.signUp(name, email, id, phone, password).subscribe(() => {
      this.router.navigate(['/chat']);
      location.reload();
    }, () => this.invalidCredentials = true);
  }

  validateEmail(email: string, event: any) {
    if (event.type == 'keyup' && !this.emailIsValid) {
      // only validate email on keyup if it has been identified as invalid
      this.emailIsValid = SignUpComponent.EMAIL_REGEX.test(email);
      if (email.length < 7 || email.length > 256) {
        this.emailIsValid = false;
      }
    } else if (event.type == 'blur') { // always validate the email on blur
      this.emailIsValid = SignUpComponent.EMAIL_REGEX.test(email);
      if (email.length < 7 || email.length > 256) {
        this.emailIsValid = false;
      }
    }
  }

  validateCompleteName(name: string, event: any) {
    if (event.type == 'keyup' && !this.nameIsValid) {
      // only validate email on keyup if it has been identified as invalid
      this.nameIsValid = SignUpComponent.NAME_REGEX.test(name);
    } else if (event.type == 'blur') { // always validate the email on blur
      this.nameIsValid = SignUpComponent.NAME_REGEX.test(name);
    }
  }

  validatePhone(phone: string, event: any) {
    if (event.type == 'keyup' && !this.phoneIsValid) {
      // only validate email on keyup if it has been identified as invalid
      this.phoneIsValid = SignUpComponent.PHONE_NUMBER_REGEX.test(phone);
    } else if (event.type == 'blur') { // always validate the email on blur
      this.phoneIsValid = SignUpComponent.PHONE_NUMBER_REGEX.test(phone);
    }
  }

  validatePassword(password: string, event: any) {
    if (event.type == 'keyup' && !this.passwordIsValid) {
      // only validate email on keyup if it has been identified as invalid
      this.passwordIsValid = SignUpComponent.PASSWORD_REGEX.test(password);
    } else if (event.type == 'blur') { // always validate the email on blur
      this.passwordIsValid = SignUpComponent.PASSWORD_REGEX.test(password);
    }
  }

  validateIDNumber(id: string, event: any) {
    if (event.type == 'keyup' && !this.IDIsValid) {
      // only validate email on keyup if it has been identified as invalid
      this.IDIsValid = SignUpComponent.ID_REGEX.test(id);
    } else if (event.type == 'blur') { // always validate the email on blur
      this.IDIsValid = SignUpComponent.ID_REGEX.test(id);
    }
  }

  clearSignUpError() {
    this.invalidCredentials = false;
  }

}
