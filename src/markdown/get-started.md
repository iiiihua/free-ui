# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```js
import {Icon,Switch,Input,Dialog,Tabs,Tab,LinkFont,openDialog} from 'free-user-interface'
import 'free-user-interface/dist/lib/free.css'
```
或 按需导入所需要使用的组件 
```js
import {Icon} from 'free-user-interface'
import 'free-user-interface/dist/lib/free.css'
```
⚠️注意：在官网的案例中采用了相对路径的导入方式，您需要改为包导入方式
## Vue 单文件组件

代码示例：

```html
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Icon,Switch,Input,Dialog,Tabs,Tab,LinkFont,openDialog} from 'free-user-interface'
import 'free-user-interface/dist/lib/free.css'
export default {
  components: {Icon,Switch,Input,Dialog,Tabs,Tab,LinkFont}
}
</script>
```
准备好了吗？[走起](#/doc/color)
