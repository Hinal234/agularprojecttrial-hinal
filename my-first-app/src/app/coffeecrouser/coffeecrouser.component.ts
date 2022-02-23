import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffeecrouser',
  templateUrl: './coffeecrouser.component.html',
  styleUrls: ['./coffeecrouser.component.css']
})
export class CoffeecrouserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgCoffee1 = ".././assets/images/coffee1.jpg";
  imgCoffee2 = ".././assets/images/coffee2.png";
  imgCoffee3 = ".././assets/images/coffee3.jpg";

}
