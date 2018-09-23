import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from '../components/landing-page/landing-page.component';
import {ChatComponent} from '../components/chatbot/chat/chat.component';
import {LoginComponent} from '../components/authentication/login/login.component';
import {AuthenticationService} from '../services/authentication/authentication.service';
import {SignUp} from '../components/sign-up/sign-up';
import {ChildRegistryComponent} from '../components/child-registry/child-registry.component';
import {UnauthenticateGuard} from '../services/unauthenticate-guard.service';
import {AuthenticateGuard} from '../services/authenticate-guard.service';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'sign-up', component: SignUp},
  {path: 'landingPage', component: LandingPageComponent, canActivate: [UnauthenticateGuard]},
  {path: 'chatbot', component: ChatComponent, canActivate: [AuthenticateGuard]},
  {path: 'register-child', component: ChildRegistryComponent, canActivate: [AuthenticateGuard]}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  providers: [
    AuthenticationService
  ]
})
export class AppRoutingModule { }
