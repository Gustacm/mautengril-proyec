import { Injectable, signal } from '@angular/core';
import { sign } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  show =signal(false)
  constructor() { }

  swich(){
    if(this.show() === false){
      return this.show.set(true)
    }else{
      return this.show.set(false)
    }
  }
}
