import { Injectable } from '@angular/core';
import {$WebSocket, WebSocketSendMode} from 'angular2-websocket/angular2-websocket';
import {PushNotificationsService} from 'ng-push';

@Injectable()
export class NotifService {

  ws: any;
  notification: any;

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

  initNotifService(){
    this.ws = new $WebSocket("");
  }

  turnOnNotifService(){
    this.ws.getDataStream().subscribe(
      (msg)=> {
        console.log("next", msg.data);
        this.ws.close(false);
      },
      (msg)=> {
        console.log("error", msg);
      },
      ()=> {
        console.log("complete");
      }
    );
  }

  addNotif(title:string, bd:any){
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

  turnOffNotifService(){
    this.ws.close(true);
  }

}
