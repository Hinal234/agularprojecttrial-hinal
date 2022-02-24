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

  // fname = "";

  // inputValue(){
  //   this.fname="Hinal";
  // }
  callValue(){
    
  }

  fname="Hinal";
  lname="Hapani";
  address=" ";
  email = " ";

  able = true;
  gnumber =0;


  numArrays = [1,2,3,4,5,6];
  strArrays = ["James","Martin","aaa","Goslin"];

  itemsent="laptop";






}
