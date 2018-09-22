import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthenticateService} from './authentication/authenticate.service';

@Injectable()
export class AuthenticateGuard implements CanActivate {
  constructor(private authenticateService: AuthenticateService, private router: Router) {
  }

  canActivate(): Promise<boolean> {
    return this.authenticateService.isLoggedIn()
      .then(response => {
        if (!response) {
          this.router.navigate(['/login']);
        }
        return response;
      });
  }

}
