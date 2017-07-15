// 自定义指令highlight
// 指令需要导入Directive, ElementRef, Renderer 来 辅助元素的渲染
import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: "[highlight]"
})
export class HighlightDirective {
  constructor(
    private el: ElementRef, 
    private renderer: Renderer
  ) { 
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'pink');
  }
}
