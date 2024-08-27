import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  private renderer: Renderer2;
  constructor(private rendererFactory: RendererFactory2) { 
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  setStyle(element: HTMLElement, style: string, value: string): void{
    this.renderer.setStyle(element, style, value);
  }
  addClass(element: HTMLElement, className: string): void{
    this.renderer.addClass(element, className);
  }
  removeClass(element: HTMLElement, className: string): void {
    this.renderer.removeClass(element, className);
  }
}
