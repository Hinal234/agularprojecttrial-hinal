import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() itemreceived ='';

  itemtogo='mobile';
  itemtogo2='phone';

  arrgo = ["James","Mark"];


  counters=["0"];
  count:any=0;
  incrementcounter(newItem:string){
    // this.counters.push(newItem);
    this.count++;
  }

}
