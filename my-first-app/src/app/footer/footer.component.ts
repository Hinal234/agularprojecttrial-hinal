import { Component, OnInit, Input } from '@angular/core';
//import { DatetimeService } from '.././datetime.service';
import { FormdataService } from '.././formdata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //constructor(public Info: DatetimeService) { }
  constructor(public data: FormdataService) { }

  ngOnInit(): void {
  }
  @Input() itemtoget ="";
  @Input() itemtoget2 ="";

  @Input() arrget:any



  


}
