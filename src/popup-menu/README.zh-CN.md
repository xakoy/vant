# PopupMenu 

### 介绍

弹出菜单。（已过期，请使用[Popover](#/zh-CN/popover)组件）

## 代码演示

### 基础用法

可以通过`v-model`控制菜单是否展示

```html
<bvan-popup-menu v-model="menuVisible" right="6px" top="24px">
  <bvan-popup-menu-item @click="itemClickHandler" icon="plus" title="新建日程" />
  <bvan-popup-menu-item title="我的朋友">
    <template #icon>
      <bvan-icon name="friends-o" />
    </template>
  </bvan-popup-menu-item>
</bvan-popup-menu>
```

```js
export default {
  data() {
    return {
      menuVisible: false,
    };
  },
  methods: {
    itemClickHandler() {
    },
  },
}
```

### 结合CellGroup使用

结合CellGroup使用，icon区域点击显示

```html
<bvan-popup-menu v-model="menuVisible" right="6px" top="24px">
  <bvan-popup-menu-item @click="itemClickHandler" icon="plus" title="新建日程" />
  <bvan-popup-menu-item title="我的朋友">
    <template #icon>
      <bvan-icon name="friends-o" />
    </template>
  </bvan-popup-menu-item>
</bvan-popup-menu>

<bvan-cell-group title="标题">
  <template #value>
    <bvan-icon name="plus" @click="menuVisible = true" />
  </template>
  <bvan-cell is-link title="测试cell" />
</bvan-cell-group>
```

```js
export default {
  data() {
    return {
      menuVisible: false,
    };
  },
  methods: {
    itemClickHandler() {
    },
  },
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model (value) | 是否显示菜单 | *boolean* | `false` |
| top | position top 位置 | *string* | - |
| right | position right 位置 | *string* | - |
| left | position left 位置 | *string* | - |
| bottom | position bottom 位置 | *string* | - |
| z-index | position z-index 位置 | *number* | `100` |


### PopupMenuItem Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| title | 菜单项标题 | *string* | 当前项文字 |
| icon | 左侧[图标名称](#/zh-CN/icon)或图片链接 | *string* | - |
| icon-prefix `v2.5.3` | 图标类名前缀，同 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | *string* | `van-icon` |

### PopupMenuItem Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击菜单栏触发 | - |

### PopupMenuItem Slots

| 名称 | 说明 |
|------|------|
| title | 自定义标题，不支持动态渲染 |
| icon | 左侧图标 |