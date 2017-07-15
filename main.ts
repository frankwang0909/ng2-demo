// 用来捕获浏览器的异步事件，帮助 ng2 实现高效的变化检测特性
import 'zone.js';

import 'core-js/es6/reflect';
import 'core-js/es7/reflect';

// JiT启动模式
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
