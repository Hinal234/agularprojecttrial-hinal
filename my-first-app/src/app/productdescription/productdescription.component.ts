import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-productdescription',
  templateUrl: './productdescription.component.html',
  styleUrls: ['./productdescription.component.css']
})
export class ProductdescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productdata=[
    {
      "id": 1,
      "name":"HP",
      "price" : 64000,
      "Qty" : 5,
      "location" : "usa",
      "stock" :14,
      "url":".././assets/images/hp.jpg"
    },
    {
      "id": 2,
      "name": "Dell",
      "price" : 64000,
      "Qty" : 5,
      "location" : "usa",
      "stock" :14,
      "url":".././assets/images/dell.jpg"
      
    },
    {
      "id": 3,
      "name": "Lenovo",
      "price" : 67000,
      "Qty" : 5,
      "location" : "China",
      "stock" :14,
      "url":".././assets/images/lenovo.jpg"
    },
    {
      "id": 4,
      "name": "Asus",
      "price" : 64000,
      "Qty" : 5,
      "location" : "usa",
      "stock" :5,
      "url":".././assets/images/asus.jpg"
      
    },
    {
      "id": 5,
      "name" :"MacBook",
      "price" : 64000,
      "Qty" : 2,
      "location" : "usa",
      "stock" :14,
      "url":".././assets/images/macbook.jpg"
      
    }
    
  ]

  
 @Output() descriptionItemEvent = new EventEmitter<any>();

 addToCartEvent(productData: any){
   this.descriptionItemEvent.emit(productData);
 }

}
