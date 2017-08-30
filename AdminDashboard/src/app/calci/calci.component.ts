import { Component, OnInit,Input } from '@angular/core';
import { CalculationService } from '../calculation.service';
@Component({
  selector: 'app-calci',
  templateUrl: './calci.component.html',
  styleUrls: ['./calci.component.css']
})
export class CalciComponent implements OnInit {
  constructor(private calci:CalculationService) { }
  @Input() cname;

  emp;
  ngOnInit() {
          this.emp=this.calci.displayEmp();
  }
  result:number;
  add(a,b){
this.result=this.calci.addNum(a,b)
  }



}
