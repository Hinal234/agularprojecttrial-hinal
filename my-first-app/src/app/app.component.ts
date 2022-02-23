import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  imgUrl = ".././assets/images/image.jpg";
  count=0;
  countValue(){
    this.count+=1;
  }

  fname = "";

  inputValue(){
    this.fname="Hinal";
  }

}
