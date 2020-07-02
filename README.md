<p align="center">
    <img alt="logo" src="https://img.yzcdn.cn/vant/logo.png" width="120" style="margin-bottom: 10px;">
</p>
<h3 align="center" style="margin: 30px 0 35px;">基于vant修改的使用于移动端UI</h3>

---

## 安装

```bash
# 通过 npm 安装
npm i vant -S

# 通过 yarn 安装
yarn add vant
```

## 快速上手

```js
import Vue from 'vue';
import { Button } from '@belvoly-vue-aioa/bvant';
import '@belvoly-vue-aioa/bvant/lib/index.css';

Vue.use(Button);
```

## 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89) 协议，请自由地享受和参与开源。


## 更新
### v0.1.7
1. 修改`nav-bar`的文字颜色
2. 调整`cell` 和 `field`, 增加`form`属性

### v0.1.6
1. 调整`cell` 和 `field` 的样式

### v0.1.5
1. 修复`icon`的样式不正确

### v0.1.4
1. 修复字体颜色为红色的BUG
2. 修复`picker-field` value 为`0`或者为空字符时，文本不正确

### v 0.1.3
1. 调整 `tab` 组件默认的样式，为蓝色
2. 添加 `popup-menu` 组件

### v 0.1.2
1. 修复`picker-field`,在设置了`text-key`, `value-key`后，无法获取到值
2. 更新`datetime-picker-field`的属性`value-format`文档