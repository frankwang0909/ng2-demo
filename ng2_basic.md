# Angular2 的核心概念

![](./images/1.jpg)

## 1.Components 组件 Templates 模板 Metadata 元数据 Data binding 数据绑定

![](./images/2.jpg)

### 1.1 组件及示例代码

    //装饰器
    @Component({
        //元数据

        selector: 'hello',

        //定义组件的模板
        template: '<p>{{greeting}}</p>
    })

    //组件类
    export class HelloComponent {
        private greeting: string;
        constructor() {
            this.greeting = 'Hello, Welcome to Angular 2!';
        }
    }

![](./images/5.jpg)

1.1.1 装饰器：@Component

赋予一个类更丰富的信息,即将`元数据` 注入到组件类中。

1.1.2 元数据：装饰器重定义的数据

1.1.3 模板：

可以在元数据内自定义模板template; 也可以通过templateUrl:"path/xx.html" 来引用外部模板xx.html

1.1.4 数据绑定：

1)插值：{{变量名}}。可以直接使用`组件类`里的变量。

2)属性绑定：[]="mydata"。把`组件类`的数据传递`mydata`到`模板`中的，可以从`父组件`向`子组件`传递数据。

     <input [message]="myData" />

3)事件绑定：(事件名)。把`模板`产生的数据通过`函数调用`的方式传递到`组件类`中，可以从`子组件`从`父组件`传递数据。

    <input (keyup)="handle($event)" />


4)双向绑定：[(ngModel)] 。实现模板和组件类的数据的双向流动，实时更新。

    <input [(ngModel)]="myData" />


### 1.2 组件树

![](./images/6.jpg)

### 1.3 组件间的通讯机制及数据流向

![](./images/3.jpg)

![](./images/7.jpg)

### 1.4 组件的生命周期及其钩子

![](./images/4.jpg)

1.Constructor 构造器初始化：变量的初始赋值

2.OnChanges 接收父组件传递的数据，第一次触发数据变化OnChanges钩子

3.OnInit 组件初始化：此时处理业务逻辑

4.OnChange 运行期间只要数据发生了变化，就会触发数据变化OnChange钩子

5.OnDestroy 组件销毁前会触发OnDestroy钩子：数据解绑、取消数据订阅等


## 2. Directives 指令

组件继承于指令，组件是自身带有模板的指令。

2.1 属性指令：改变组件模板的外观或行为的，如样式等。


2.2 结构指令：改变组件模板的DOM结构，如ngIf用来插入或者移除DOM节点。


2.3 自定义指令：

    // 自定义指令highlight
    // 指令需要导入Directive, ElementRef, Renderer 来 辅助元素的渲染
    import { Directive, ElementRef, Renderer } from '@angular/core';

    @Directive({
        selector: "[highlight]" // 中括号表示指令使用在元素属性上
    })
    
    export class HighlightDirective {
        constructor(private el: ElementRef, private renderer:Renderer) { 
            renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'pink');
        }
    }


## 3. Services 服务

服务是实现专一目的的逻辑单元（类），如日志服务。

    export class LoggerService {
        constructor() {}

        debug(msg: string) {
            console.log(msg);
        }

        error(msg: string) {
            console.error(msg);
        }
    }


## 4. Dependency Injection 依赖注入

### 4.1 依赖注入:

`依赖注入`是`组件`引入`外部构建`（如服务）的一种机制。最常见的是组件引入服务。引用服务其实引用的是`服务类的实例`，所以服务在引入之前有一个`实例化`的过程，并且`这个实例`通常要被缓存起来`注入器对象`中，以供其他组件使用。

![](./images/8.jpg)

示例：

    @Component({
        selector: 'hello',
        template: '<p>{{greeting}}</p>
        
        //依赖注入的配置
        providers:[LoggerService]
    })

    export class HelloComponent {
        private greeting: string;

        //组件构造函数 定义服务类LoggerService类型的参数
        依赖注入机制会根据这个参数在注入器对象中尝试查找LoggerService的实例，找到之后，自动传入到这个构造函数中，组件内部获得了LoggerService实例的引用。
        constructor(logger: LoggerService){
            this.greeting = 'Hello, Angular2';
            logger.debug('构造函数执行完毕');
        }
    }


### 4.2 分层依赖注入 hierarchical dependency injection

在父组件中依赖注入的服务，在`组件本身及其子组件`都能使用。

![](./images/9.jpg)

## 5. Modules 模块

### 5.1 文件模块：框架代码以模块的形式组织

5.1.1 文件模块分类：

1.核心模块：@angular/core

2.通用模块：@angular/common

3.表单模块：@angular/forms

4.网络模块：@angular/http

5.其他模块

5.1.2 模块的使用：

`文件模块`在使用前，需要通过`import`导入

    import { Http } from "@angular/http";

    import { Component } from "@angular/core";

    import { Directive } from "@angular/core";

    import { ElementRef, Renderer } from "@angular/core";

### 5.2 应用模块：功能单元以模块的形式组织
![](./images/10.jpg)

5.1.1 应用模块：把有关联的组件、服务、指令等按功能进行归类包装成模块。

5.1.2 模块间的调用：

默认情况下，一个组件不能直接引用其他组件或指令的，要想使用就必须先导入。一个模块内的组件可以使用同模块的任意组件和指令。

    // @NgModule 声明模块
    @NgModule({

        // 包装组件或指令
        declarations: [
            AppComponent,
            HelloComponent,
            SomeDirective
        ],

        // 依赖注入服务
        providers: [ LoggerService ],

        // 导入其他模块
        imports: [OtherModule ],

        // 设置根组件
        bootstrap: [ AppComponent],

        // 导出该模块暴露的指令或模块以供其他组件调用
        exports:[ SomeDirective ]
    })

    export class AppModule {}


一个模块导入了另一个模块后，可以调用模块`exports出来的组件或指令`，
以及模块内依赖注入的服务（一个模块依赖注入了服务，那么整个应用内的所有组件里）。

5.2.3 根模块、特性模块、共享模块、核心模块

应用根据`功能`可以切分为大大小小的各种模块。其中，`根模块`作为应用启动的入口。各种`功能`可以封装成一个个`特性模块`。随着`特性模块`越来越多，如果它们之间可以抽象出来一些相似的`功能组件`，我们把这些`功能组件`再封装成为独立的`共享模块`。
我们可以把一些全局的组件或者服务（如维护登录信息的服务、公共的头部、底部组件等）放在`根模块`里，也可以抽离出来封装成独立的`核心模块`，只在`根模块`中导入。

![](./images/10.jpg)

