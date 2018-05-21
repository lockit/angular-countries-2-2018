import { Directive, ElementRef, HostListener, Input } from '@angular/core';

import { Country } from '../models/country';

@Directive({
  selector: '[spinning-star]'
})
export class SpinningStarDirective {

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.favourite = this.country.favourite;
    this.el.nativeElement.classList.add(this.isFavourite());
    this.el.nativeElement.classList.add('fa-star');
  }

  isFavourite(){
    return this.favourite ? 'fas' : 'far';
  }

  @Input('spinning-star') country: Country;

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.classList.add('fa-spin');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.classList.remove('fa-spin');
  }

}
