import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from '../components/landing-page/landing-page.component';
import {ChatComponent} from '../components/chatbot/chat/chat.component';
import {ChildRegistryComponent} from '../components/child-registry/child-registry.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'landingPage', component: LandingPageComponent},
  {path: 'chatbot', component: ChatComponent},
  {path: 'register-child', component: ChildRegistryComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  providers: []
})
export class AppRoutingModule { }
