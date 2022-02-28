import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  constructor() {}
    today = new Date();

    counter=0;
    increment(){
      return this.counter++;
    }

    
}
