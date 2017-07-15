# Angular2-Demo
慕课网课程《[Angular2一小时快速入门](http://www.imooc.com/learn/789)》代码实操的示例代码。

## 注意
- 课程前面部分偏理论介绍，如果你对Angular本身有初步的了解再看这个视频，效果更好；
  基础概念点击 [Angular2 核心概念](./ng2_basic.md)
  
- 如果你更喜欢从实战代码开始，可以从这个Demo或者视频的第三部分开始学习。


## 使用
- 确保 Node 版本为 4.0 及以上
- 执行 `npm install` 安装依赖包
- 执行 `npm start` 编译并启动本地server
- 打开浏览器访问 http://localhost:3000 

## 内容
1. 基于webpack的项目种子搭建（非Angular-CLI，见后面常见问题答复 #4）
2. 内置指令的使用
3. 自定义指令的开发与使用
4. 服务的开发与使用
5. 父子组件双向通讯

## 常见问题答复
### 1. 项目构建时 package.json 和 tsconfig.json 文件配置
package.json大致可以看看这个：https://github.com/lizhonghui/blog/issues/15 。关于tsconfig.json 这个涉及内容比较多，列巨几个需要关注的配置：
- compilerOptions.target: 指定 TS 编译后生产的目标语言，本例的es5表示编译后生成es5的代码，可选值有 'es3'(默认), 'es5', 'es6'。
- compilerOptions.module: 指定编译后的模块采用哪个 module 版本，可选值'none', 'commonjs', 'amd', 'system', 'umd', 'ES6'或'es2015'
- compilerOptions.moduleResolution: 指定TS代码的模块解释机制，可选值 node 和 classic
- compilerOptions.sourceMap: 是否生成source map文件
- compilerOptions.emitDecoratorMetadata: 
- compilerOptions.typeRoots: 指定第三方库的类型定义的文件地址

更多选项解释可以移步这里：http://json.schemastore.org/tsconfig

### 2. VSCode编辑插件
几个字母生成模板有很多这样的插件，在vscode的extension里搜索“angular snippets”，有很多类似的工具，选一个喜欢的即可，且基本都可以自定义snippet。

### 3. 没有NG1基础可以学NG2么？
没有NG1的基础学NG2完全没问题的，有NG1的基础只是对理解NG2的部分概念有帮助，很多NG1的复杂概念在NG2里已经废弃掉了。

### 4. 关于Angular-CLI
本示例并不是用Angular-CLI搭建，而是从最基本的package.json开始搭建，方便从基础讲解，实际开发还是推荐使用Angular-CLI。
所以启动应用并不是用`ng serve`，启动步骤如下：
```bash
npm install
npm start
```
运行完上面两部命令后，若没有报错，打开浏览器访问 `http://localhost:3000` 即可。
