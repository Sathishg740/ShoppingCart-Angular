import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers:[DatePipe]
})
export class OrderComponent implements OnInit {
  myDate:any;
  constructor(public datepipe: DatePipe) {
     let currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
  this.myDate=currentDateTime
    console.log(currentDateTime);
   }

  ngOnInit(): void {
  }

}
