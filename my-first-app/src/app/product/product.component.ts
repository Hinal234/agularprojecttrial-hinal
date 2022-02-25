import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value:string){ 
    this.newItemEvent.emit(value);
  }
  desc=false;
  description(){

   if(this.desc==false){
     this.desc = true;
   }else{
     this.desc=false;
   }
  }
}
