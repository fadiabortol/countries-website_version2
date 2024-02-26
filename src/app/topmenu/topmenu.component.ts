import { Component, OnInit } from '@angular/core';
import { MyService } from '../country/MyService';

@Component({
  selector: 'topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {
  constructor(public svc: MyService) { }

  ngOnInit(): void {
  }
  showTotalCount(){
    alert(this.svc.counter);
  }

}
