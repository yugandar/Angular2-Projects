import {Pipe,PipeTransform } from '@angular/core';

@Pipe({
  name:'Capatalize'
})

export  class CapitalizePipe implements PipeTransform{
  transform(value:string){
    if(value)
    {
      return value.charAt(0).toUpperCase()+value.slice(1);
    }return value;
  }
}
