import { Injectable } from '@angular/core';

@Injectable()
export class CalculationService {

  constructor() {
  }

  addNum(a, b) {
    return a + b;
  }
  Employee;
  displayEmp() {
   return  this.Employee = [
      {
        name: 'sathish',
        id: 522,
        salary: 5000
      },
      {
        name: 'Kushi',
        id: 6963,
        salary: 9000
      }];

  }
}
