import {Component, OnInit} from '@angular/core';
import {Message} from '../../../model/Message';
import {ChatService} from '../../../services/chat/chat.service';
import {User} from '../../../model/User';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  isBotTyping = false;
  chatMessages: Message[] = [];
  user: User;

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {


  }

  addMessage(message: string, fromBot: boolean) {
    this.chatMessages.push(new Message(message, fromBot));
    this.isBotTyping = !fromBot;
  }

  processUserInput(message: string) {
    this.addMessage(message, false);
    // this.chatService.askBot('Josue', message).then(
    //   response => {
    //     const botResponseObject = JSON.parse(JSON.stringify(response));
    //     this.addMessage('El bot respondio!!', true);
    //   }
    // );
    this.addMessage('El bot respondio!!', true);
  }

  /**
   * Obtains the submitted message from the user to process it.
   * @param {NgForm} form
   */
  onUserSubmit(form: NgForm) {
    this.processUserInput(form.value.question);
  }

}
