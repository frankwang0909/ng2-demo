//  子组件
// EventEmitter 是与Output装饰器一起使用的
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-child',
  templateUrl: './app/child.component.html'
})
export class ChildComponent {
  // Input装饰器：从父组件向子组件传递消息
  // 定义变量存储message存储从父组件接受到的消息
  @Input() private message: string;

  // Output装饰器：子组件向父组件传递消息
  // 定义变量outer存储
  @Output() private outer = new EventEmitter<string>();
	constructor() {	}
  
  // 定义向父组件发送消息的回调函数
  sendToParent() {
    this.outer.emit('我是子组件发送过来的消息体');
  }
}
