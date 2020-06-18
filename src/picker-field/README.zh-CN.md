# PickerField 选择器Field

### 介绍

Picker的Field版本，支持和Form一起支持验证等特性。只支持单列数据，不支持多列数据源

## 代码演示

### 基础用法

可以通过`v-model`双向绑定输入框的值，通过`placeholder`设置占位提示文字

```html
<van-cell-group>
    <bvan-picker-field v-model="value" label="城市" show-toolbar :columns="columns" />
</van-cell-group>
```

```js
export default {
  data() {
    return {
      value: '',
      columns: [{
        text: '一', value: '1',
      }, {
        text: '二', value: '2',
      }]
    };
  }
}
```

### 值类型

```html
<bvan-picker-field v-model="num" label="类型" show-toolbar :columns="singleNums"/>
```

```js
export default {
  data() {
    return {
      num: null,
      singleNums: [{
        text: '零',
        value: 0
      },{
        text: '一',
        value: 1
      }],
    };
  }
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model (value) | 当前输入的值 | *number \| string* | - |
| label | 输入框左侧文本 | *string* | - |
| columns | 对象数组，配置显示的数据 | *Column[]* | `[]` |
| value-key | 选项对象中，选项文字对应的键名 | *string* | `text` |
| text-key | 选项对象中，选项值对应的键名 | *string* | `value` |
| name `v2.5.0` | 名称，提交表单的标识符 | *string* | - |
| placeholder | 占位提示文字 | *string* | - |
| border | 是否显示内边框 | *boolean* | `true` |
| required | 是否显示表单必填星号 | *boolean* | `false` |
| error | 是否将输入内容标红 | *boolean* | `false` |
| error-message | 底部错误提示文案，为空时不展示 | *string* | - |
| label-class | 左侧文本额外类名 | *any* | - |
| label-width | 左侧文本宽度，默认单位为`px` | *number \| string* | `90px` |
| label-align | 左侧文本对齐方式，可选值为 `center` `right` | *string* | `left` |
| input-align | 输入框对齐方式，可选值为 `center` `right` | *string* | `right` |
| error-message-align | 错误提示文案对齐方式，可选值为 `center` `right` | *string* | `right` |
| rules `v2.5.0` | 表单校验规则，详见 [Form 组件](#/zh-CN/form#rule-shu-ju-jie-gou) | *Rule[]* | - |

### Events

当选择器有多列时，事件回调参数会返回数组

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 选项改变时触发 |选中值，选中值元素 |

### Column 数据结构

`columns`为一个对象数组，数组中的每一个对象配置每一列，每一列有以下`key`

| 键名 | 说明 | 类型 |
|------|------|------|
| text | 列中对应的文本,可根据text-key变换 | *string* |
| value | 列中对应的值，可根据value-key变换  | *string* |