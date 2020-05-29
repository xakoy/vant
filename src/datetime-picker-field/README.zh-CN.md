# DatetimePickerField 时间选择Field

### 介绍

DatetimePicker的Field版本，支持和Form一起支持验证等特性。

## 代码演示

### 基础用法

可以通过`v-model`双向绑定输入框的值，通过`placeholder`设置占位提示文字

```html
<van-cell-group>
    <bvan-datetime-picker-field v-model="value" label="开始日期" placeholder="请选择日期" />
</van-cell-group>
```

```js
export default {
  data() {
    return {
      value: ''
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
| type | 类型，可选值为 `date` <br> `time` `year-month` | *string* | `datetime` |
| name `v2.5.0` | 名称，提交表单的标识符 | *string* | - |
| placeholder | 占位提示文字 | *string* | - |
| border | 是否显示内边框 | *boolean* | `true` |
| required | 是否显示表单必填星号 | *boolean* | `false` |
| error | 是否将输入内容标红 | *boolean* | `false` |
| error-message | 底部错误提示文案，为空时不展示 | *string* | - |
| value-format | 内容格式化函数, YYYY-MM-DD类似moment的格式 | *string* | - |
| label-class | 左侧文本额外类名 | *any* | - |
| label-width | 左侧文本宽度，默认单位为`px` | *number \| string* | `90px` |
| label-align | 左侧文本对齐方式，可选值为 `center` `right` | *string* | `left` |
| input-align | 输入框对齐方式，可选值为 `center` `right` | *string* | `left` |
| error-message-align | 错误提示文案对齐方式，可选值为 `center` `right` | *string* | `left` |
| defaut-now | 默认现在时间 | *boolean* | `false` |
| rules `v2.5.0` | 表单校验规则，详见 [Form 组件](#/zh-CN/form#rule-shu-ju-jie-gou) | *Rule[]* | - |


### DatePicker Props

当时间选择器类型为 date 或 datetime 时，支持以下 props:

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| min-date | 可选的最小时间，精确到分钟 | *Date* | 十年前 |
| max-date | 可选的最大时间，精确到分钟 | *Date* | 十年后 |

### TimePicker Props

当时间选择器类型为 time 时，支持以下 props:

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| min-hour | 可选的最小小时 | *number \| string* | `0` |
| max-hour | 可选的最大小时 | *number \| string* | `23` |
| min-minute | 可选的最小分钟 | *number \| string* | `0` |
| max-minute | 可选的最大分钟 | *number \| string* | `59` |

### Events

除下列事件外，Field 默认支持 Input 标签所有的原生事件

| 事件 | 说明 | 回调参数 |
|------|------|------|
| input | 输入框内容变化时触发 | *value: string (当前输入的值)* |
| change | 值反生变化触发 | *event: Event* |