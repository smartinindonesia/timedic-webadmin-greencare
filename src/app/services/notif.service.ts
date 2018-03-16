import {Injectable} from '@angular/core';
import {$WebSocket, WebSocketSendMode} from 'angular2-websocket/angular2-websocket';
import {PushNotificationsService} from 'ng-push';

@Injectable()
export class NotifService {

  ws: any;
  notification: any;
  audio: Audio;

  constructor(private _pushNotifications: PushNotificationsService) {
    //this.initNotifService();
    let bd = {
      body: 'Just an example',
      //icon?: string
      //tag?: string
      //renotify?: boolean
      //silent?: boolean
      //sound?: string
      //noscreen?: boolean
      //sticky?: boolean
      //dir?: 'auto' | 'ltr' | 'rtl'
      //lang?: string
      //vibrate?: number[]
    }
    this.addNotif('Example', bd);
  }

  initNotifService() {
    this.ws = new $WebSocket('ws://127.0.0.1:7000');
  }

  initAudio() {
    this.audio = new Audio();
    this.audio.src = '../../../assets/audio/alarm.wav';

  }

  playAudio() {
    this.audio.load();
    this.audio.play();
  }

  stopAudio() {
    this.audio.stop();
  }

  turnOnNotifService() {
    this.ws.getDataStream().subscribe(
      (msg) => {
        console.log('next', msg.data);
        this.ws.close(false);
      },
      (msg) => {
        console.log('error', msg);
      },
      () => {
        console.log('complete');
      }
    );
  }

  addNotif(title: string, bd: any) {
    this._pushNotifications.create(title, bd).subscribe(
      res => {
        if (res.event.type === 'click') {
          // You can do anything else here
          res.notification.close();
        }
      },
      err => console.log(err)
    )
  }

  turnOffNotifService() {
    this.ws.close(true);
  }

}
