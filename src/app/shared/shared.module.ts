import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from '../shared/dropdown.directive';
import { HighlightlinkDirective } from '../shared/highlightlink.directive';


@NgModule({
  declarations: [
    DropdownDirective,
    HighlightlinkDirective
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    HighlightlinkDirective
  ]
})
export class SharedModule { }
