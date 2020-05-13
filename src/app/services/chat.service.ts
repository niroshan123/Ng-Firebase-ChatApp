import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';

import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';


import { ChatMessage } from '../models/chat-message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  user: firebase.User;
  chatMessages: AngularFireList<ChatMessage>;
  chatMessage: ChatMessage;
  // userName: Observable<string>;

  userName: string;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    // this.afAuth.authState.subscribe(auth=>{
    //   if(auth !== undefined && auth!== null){
    //
    //     this.user = auth;
    //   }
    // })

  }

  sendMessage(msg: string) {
    const timestamp = this.getTimeStamp();
    // const email = this.user.email;
    const email = "test@example.com"
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message: msg,
      timeSent: timestamp,
      userName: 'test-user',
      // userName: this.userName
      email: email });
    console.log("nfdjncdjc");
  }

  getMessages(): AngularFireList<ChatMessage> {
    return this.db.list('messages',  ref => ref.orderByKey().limitToLast(25));
  }

  getTimeStamp(){
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
      (now.getUTCMonth() + 1) + '/' +
      now.getUTCDate();
    const time = now.getUTCHours() + ':' +
      now.getUTCMinutes() + ':' +
      now.getUTCSeconds();

    return (date + ' ' + time);
  }


}
