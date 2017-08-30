import {Pipe,PipeTransform } from '@angular/core';
@Pipe({
  name:'search'
})
export  class Search implements  PipeTransform{
  transform(value:any,input:string) {
    if (input) {
      input=input.toLowerCase();
      return value.filter(function (el:any) {
        return el.toLowerCase().indexOf(input) > -1

      })
    }
    return value;
  }
}

