### 完成度：
* 组件样式没有实现
* 添加讲师、学员功能没有实现

__Details:__

- \- 分组请求需要处理异常

### 测试：


__Details:__



### 知识点：
* 有划分分组、讲师、学员组件，但抽象层数不够
* 没有实践组件消息传递
* 依赖注入和http模块理解到位，Observable基础掌握
* 状态管理工具运用正确

__Details:__
+ \+ AppState定义正确
+ \+ 子模块定义正确
- \- Trainer和Trainee是完全同构的接口，应该抽象成同一个Person接口

### 工程实践：
* 小步提交做得不错

__Details:__
+ \+ 状态相关逻辑单独抽象出一个模块是比较好的实践
- \- EffectsModule应该也放到这个子模块中
- \- Action命名不正确，postGroup含义不清晰
- \- 类名不正确，可以叫GroupEffects

### 综合：


__Details:__



