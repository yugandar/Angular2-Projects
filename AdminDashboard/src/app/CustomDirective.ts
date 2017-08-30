import { Directive,ElementRef } from '@angular/core';
@Directive({
  selector:'[myBackground]'
})

export  class MycustomeDirective {
  constructor(private el:ElementRef){
    el.nativeElement.style.backgroundColor='yellow';
    el.nativeElement.style.fontSize='50px';
  }
}
