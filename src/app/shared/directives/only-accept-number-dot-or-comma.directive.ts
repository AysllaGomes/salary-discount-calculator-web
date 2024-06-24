import { Directive, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[onlyAcceptNumberDorOrComma]',
})
export class OnlyAcceptNumberDotOrCommaDirective {

    @Input()
    acceptDot = false;

    @Input()
    acceptComma = false;

    @HostListener('keypress', ['$event'])
    onKeyPress(event: any): boolean {
        const key = event.which || event.keyCode;

        if (
            (key > 47 && key < 58)
            || (key === 46 && this.acceptDot)
            || (key === 44 && this.acceptComma)
        ) {
            return true;
        } else { return key === 8 || key === 0; }
    }

}
