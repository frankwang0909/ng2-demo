import { Component } from '@angular/core';

// 导入服务类
import { LoggerService } from './logger.service';

@Component({
  selector: 'my-app',
  
  // 引用外部的模板
  templateUrl: './app/app.component.html'
})
export class AppComponent {
  // 定义组件的变量greeting，类型为string
  private greeting: string;

  // 定义组件的变量isShowMore,类型为boolean
  private isShowMore: boolean;

  // 定义变量msgToChild，存储向子组件发送的消息
  private msgToChild: string;

  // 定义变量msgFromChild，存储从子组件发送过来的消息
  private msgFromChild: string;

  // 在构造函数中添加服务类logger的相应参数
	constructor(private logger: LoggerService) {	}

  // 初始化组件
  ngOnInit() {
    this.greeting = 'Angular 2';

    this.msgToChild = 'message from parent';

    // 类的初始化中可以使用服务logger
    this.logger.debug('应用已初始化');
  }

  // 处理从子组件传递的消息
  receive(msg: string) {
    this.msgFromChild = msg;
  }
}
