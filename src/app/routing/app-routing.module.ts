import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChatComponent} from '../components/chatbot/chat/chat.component';
import {LoginComponent} from '../components/authentication/login/login.component';
import {AuthenticationService} from '../services/authentication/authentication.service';
import {LandingPageComponent} from '../components/landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'chat', component: ChatComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  providers: [
    AuthenticationService
  ]
})
export class AppRoutingModule { }
