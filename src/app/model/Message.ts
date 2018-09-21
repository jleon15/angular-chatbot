export class Message {

  content: String;
  fromBot: boolean;

  constructor(content: String, fromBot: boolean) {
    this.content = content;
    this.fromBot = fromBot;
  }

}
