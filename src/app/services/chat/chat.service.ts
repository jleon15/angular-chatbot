import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ChatService {

  static readonly BEGIN_CHAT_URL_ENDPOINT = '';
  static readonly CHAT_URL_ENDPOINT = '';

  constructor(private http: HttpClient) {
  }

  beginConversation(username: string): Promise<any> {
    const body = `username=${username}`;
    return this.http
      .post(ChatService.BEGIN_CHAT_URL_ENDPOINT, body, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        withCredentials: true
      })
      .toPromise();
  }

  askBot(username: string, message: string): Promise<any> {
    return this.http.get<any>(ChatService.CHAT_URL_ENDPOINT, {
      params: {
        'username': username,
        'message': message
      },
      withCredentials: true
    }).toPromise();
  }


}
