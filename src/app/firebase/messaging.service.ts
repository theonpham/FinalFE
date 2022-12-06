import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  currentMessage = new BehaviorSubject(null);
  currentMessage$ = this.currentMessage.asObservable();
  constructor(private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messages.subscribe((_messaging: any) => {
      _messaging.onMessage = _messaging.onMessage.bind(_messaging);
      _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
    });
    navigator.serviceWorker.addEventListener('message',this.onReciveMessage.bind(this))
  }
  requestPermission() {
    this.angularFireMessaging.requestToken.subscribe(
      (token: any) => {
        console.log(token);
      },
      (err: any) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe((payload: any) => {
      console.log('new message received. ', payload);
      this.currentMessage.next(payload);
    });
  }
  onReciveMessage(event:any){
    if(event.data !=null){
      const type = event.data.firebaseMessagingType;
      if(type == "push-msg-received"){
        const firebaseMessagingData  = event.data.firebaseMessagingData;
        const from = firebaseMessagingData.from;
        const payload = firebaseMessagingData.notification
        this.currentMessage.next(payload);
      }
    }
  }
}
