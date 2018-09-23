import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './routing/app-routing.module';
import { ChatComponent } from './components/chatbot/chat/chat.component';
import {FormsModule} from '@angular/forms';
import {ChatService} from './services/chat/chat.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/authentication/login/login.component';
import { SignUp } from './components/sign-up/sign-up';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {AuthenticateService} from './services/authentication/authenticate.service';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { ChildRegistryComponent } from './components/child-registry/child-registry.component';
import {AuthenticateGuard} from './services/authenticate-guard.service';
import {UnauthenticateGuard} from './services/unauthenticate-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    SignUp,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    SidebarComponent,
    ChildRegistryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [
    ChatService,
    AuthenticateService,
    AuthenticateGuard,
    UnauthenticateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
