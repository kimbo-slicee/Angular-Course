import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]',
  standalone: true
})
export class BackgroundColorDirective implements OnInit{

  constructor (private elementRef:ElementRef,
      private rendererTwo:Renderer2) { }

    ngOnInit(): void {
        this.rendererTwo.setStyle(this.elementRef.nativeElement,'backgroundColor','black')
        this.rendererTwo.setAttribute(this.elementRef.nativeElement,'attr','')
    }

}
