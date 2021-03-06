import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class SocketioService {
  private socket; // The client instance of socket.io
  private url = 'http://localhost:8080';

  constructor() {
      //this.socket = io(this.url);
   }

  sendMessage(event, message){
    this.socket.emit(event, message);    
  }

  getMessages(event) {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on(event , (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  

}

