import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpDataRequestService {

  constructor(private ht:HttpClient) { }

  getdata(){
    return this.ht.get("https://jsonplaceholder.typicode.com/users");
    //return this.ht.get("http://192.168.3.19:3000/users");
  }

}
