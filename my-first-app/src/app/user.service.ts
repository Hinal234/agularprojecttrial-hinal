import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  userUrl = "http://192.168.23.42:3000/users";

  errorhandle(functionName:any, data:any) {
    
  }

  add(user:any){
    return this.http.post(this.userUrl, user);
  }


}
