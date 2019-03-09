import { Directive, HostListener, HostBinding, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  

  @HostListener('click') openDropDown() {
    this.isOpen = !this.isOpen;
    
  }

}
