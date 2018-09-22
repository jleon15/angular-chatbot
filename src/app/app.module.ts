import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './routing/app-routing.module';
import { ChatComponent } from './components/chatbot/chat/chat.component';
import {FormsModule} from '@angular/forms';
import {ChatService} from './services/chat/chat.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/authentication/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
