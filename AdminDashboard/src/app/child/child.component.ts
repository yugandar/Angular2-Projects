import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
@Output() sendName=new EventEmitter();

  sendData(m){
    console.log(m);
    this.sendName.emit(m);
  }



  ngOnInit() {
  }
  @Input()students="hello";
  @Input()name:string;

  @Output() datago=new EventEmitter();
  go(e){
    this.datago.emit(e);
  }



}
