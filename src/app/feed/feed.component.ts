import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { ChatMessage } from '../models/chat-message.model';
import { Observable } from 'rxjs';
import { AngularFireList } from 'angularfire2/database';
// import { FirebaseListObservable } from 'angularfire2/database-deprecated';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {
  feed$: AngularFireList<ChatMessage>;


  constructor(
    private chat: ChatService
  ) { }

  ngOnInit() {
    this.feed$ = this.chat.getMessages();
  }

  ngOnChanges() {
    this.feed$ = this.chat.getMessages();
  }
}
