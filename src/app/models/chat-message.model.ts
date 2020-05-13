import {Observable} from "rxjs";

export class ChatMessage {
  $key?: string;
  email?: string;
  // userName: Observable<string>;
  userName?: string;
  message?: string;
  timeSent?: string;
}
