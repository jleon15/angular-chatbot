import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChatComponent} from '../components/chatbot/chat/chat.component';
import {LoginComponent} from '../components/authentication/login/login.component';
import {AuthenticationService} from '../services/authentication/authentication.service';

const routes: Routes = [
  {path: '', component: ChatComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  providers: [
    AuthenticationService
  ]
})
export class AppRoutingModule { }
