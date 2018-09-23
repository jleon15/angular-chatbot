import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from '../components/landing-page/landing-page.component';
import {ChatComponent} from '../components/chatbot/chat/chat.component';
import {ChildRegistryComponent} from '../components/child-registry/child-registry.component';
import {UnauthenticateGuard} from '../services/unauthenticate-guard.service';
import {AuthenticateGuard} from '../services/authenticate-guard.service';
import {AuthenticateService} from '../services/authentication/authenticate.service';
import {LoginComponent} from '../components/login/login.component';
import {SignUpComponent} from '../components/sign-up/sign-up.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'chatbot', component: ChatComponent},
  {path: 'register-child', component: ChildRegistryComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  providers: [
    AuthenticateService
  ]
})
export class AppRoutingModule { }
