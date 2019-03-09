import { Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appHighlightlink]'
})
export class HighlightlinkDirective {

  @HostBinding('style.color') linkColor:string;
   constructor() { }
  @HostListener('mouseover') mouseover(eventDate: Event) {
    this.linkColor = 'blue';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.linkColor = 'gray';
  }
}
