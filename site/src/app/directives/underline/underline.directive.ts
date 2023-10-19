import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appUnderline]'
})

export class UnderlineDirective { 
    constructor(private el:ElementRef, private renderer: Renderer2 ) {
      
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline')
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.renderer.removeStyle(this.el.nativeElement, 'text-decoration')
    }
}