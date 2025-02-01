import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMaxLength10]',
  standalone: true,
})
export class MaxLength10Directive {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: any): void {
    let inputValue = event.target.value;

    // Trim input to 10 digits if the length exceeds 10
    if (inputValue.length > 10) {
      inputValue = inputValue.slice(0, 10);
      this.el.nativeElement.value = inputValue;
    }
  }
}
