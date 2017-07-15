import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

// 导入子组件
import { ChildComponent } from './child.component';

import { HighlightDirective } from './highlight.directive';

// 导入服务类
import { LoggerService } from './logger.service';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  // 元数据中添加组件 和 指令
  declarations: [ AppComponent, ChildComponent, HighlightDirective ],
  // 元数据中注入服务
  providers: [ LoggerService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
