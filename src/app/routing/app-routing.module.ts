import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from '../components/landing-page/landing-page.component';
import {ChatComponent} from '../components/chatbot/chat/chat.component';
import {ChildRegistryComponent} from '../components/child-registry/child-registry.component';
import {UnauthenticateGuard} from '../services/unauthenticate-guard.service';
import {AuthenticateGuard} from '../services/authenticate-guard.service';

const routes: Routes = [
  {path: '', component: LandingPageComponent, canActivate: [UnauthenticateGuard]},
  {path: 'landingPage', component: LandingPageComponent, canActivate: [UnauthenticateGuard]},
  {path: 'chatbot', component: ChatComponent, canActivate: [AuthenticateGuard]},
  {path: 'register-child', component: ChildRegistryComponent, canActivate: [AuthenticateGuard]}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  providers: []
})
export class AppRoutingModule { }
