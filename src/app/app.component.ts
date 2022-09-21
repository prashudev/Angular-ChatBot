import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularChatBot';
  public openChat: boolean = false;
  isOver = false;

  clickChat(){
    this.openChat = !this.openChat;
  }
}
