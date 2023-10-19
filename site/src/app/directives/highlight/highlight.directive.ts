import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appHighlight]'
})

export class HighlightDirective {
    //@Input('color') highlightColor: string = 'yellow'
    highlightColor: string = 'yellow'
    constructor(private el:ElementRef, private renderer: Renderer2 ) {
        this.renderer.setStyle(this.el.nativeElement, 'background-color', this.highlightColor)
    }
 
}