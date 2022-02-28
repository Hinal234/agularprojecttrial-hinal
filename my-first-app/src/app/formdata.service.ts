import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormdataService {

  constructor() { }

  userdata={
    "firstname":'',
    "lastname":'',
    "email":'',
    "password":''
  };
  sendData(userdata:any){
    this.userdata = userdata;
    console.log(this.userdata);
  }

  


  

  
}
