# 快速上手

### 通过 npm 安装

在现有项目中使用 belvoly-vant 时，可以通过`npm`或`yarn`安装

```bash
# 通过 npm 安装
npm i @belvoly-vue-aioa/bvant -S

# 通过 yarn 安装
yarn add @belvoly-vue-aioa/bvant
```

## 引入组件

### 方式一. 手动按需引入组件

在不使用插件的情况下，可以手动引入需要的组件

```js
import Button from '@belvoly-vue-aioa/bvant/lib/button';
import '@belvoly-vue-aioa/bvant/lib/button/style';
```

### 方式二. 导入所有组件

Bvant 支持一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法

```js
import Vue from 'vue';
import Bvant from '@belvoly-vue-aioa/bvant';
import '@belvoly-vue-aioa/bvant/lib/index.css';

Vue.use(Bvant);
```

> 配置按需引入后，将不允许直接导入所有组件

## 常见问题

### 在 HTML 中无法正确渲染组件？

在 HTML 中使用 Vant 组件时，你可能会碰到部分示例代码无法正确渲染的情况，比如下面的用法：

```html
<bvan-cell-group>
  <bvan-cell title="单元格" value="内容" />
  <bvan-cell title="单元格" value="内容" />
</bvan-cell-group>
```

这是因为 HTML 并不支持自闭合的自定义元素，也就是说 `<van-cell />` 这样的语法是不被识别的，使用完整的闭合标签可以避免这个问题：

```html
<bvan-cell-group>
  <bvan-cell title="单元格" value="内容"></bvan-cell>
  <bvan-cell title="单元格" value="内容"></bvan-cell>
</bvan-cell-group>
```

在单文件组件、字符串模板和 JSX 中可以使用自闭合的自定义元素，因此不会出现这个问题。
