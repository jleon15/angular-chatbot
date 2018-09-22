import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticateService} from '../../services/authentication/authenticate.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();
  hamburgerClicked = false;
  userOrganizationNameInitial: string;

  constructor(private authenticateService: AuthenticateService,  private router: Router) { }

  ngOnInit() {
    this.authenticateService.getLoggedInUserInfo().then(userInfo => {
      const userInfoObject = JSON.parse(JSON.stringify(userInfo));
    });
  }

  onHamburgerClick() {
    this.hamburgerClicked = !this.hamburgerClicked;
    this.notify.emit(this.hamburgerClicked);
  }

  onViewOrganizationProfile() {
    this.router.navigate(['/organization-profile']);
  }

}
