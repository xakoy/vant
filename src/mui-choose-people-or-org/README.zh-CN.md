# ChoosePeopleOrOrg 选人控件

### 介绍

选人控件，默认当前单位选择. [实例](https://github.com/xakoy/belvoly-vue-aioa-examples/blob/master/src/views/mobile/Upload.vue)

### 引入

```js
import { ChoosePeopleOrOrg } from '@belvoly-vue-aioa/m-ui';

```

## 代码演示

### 基础用法

```html
<bvan-field label="收件人" is-link v-model="item.names" readonly @click="inputClickHandler" />
<choose-people-or-org
    v-if="opickerToToVisible"
    rootOrgCode="shhr"
    selectionMode="single"
    mode="user"
    :isShowGlobal="true"
    :defaultUsers="item.users"
    :defaultOrgs="item.orgs"
    :codes.sync="item.codes"
    :names.sync="item.names"
    :visible.sync="opickerToToVisible"
    @selected="selectedHandler"
/>
```

```ts
import { Vue, Component } from 'vue-property-decorator'
import { ChoosePeopleOrOrg } from '@belvoly-vue-aioa/m-ui';
@Component({
    components: {
        ChoosePeopleOrOrg
    }
})
export default class ChoosePeopeleOrOrg extends Vue {
    opickerToToVisible = false
    item = {
        codes: 'luolong',
        names: '罗龙',
        users: [
            {
                name: '罗龙',
                value: 'luolong'
            }
        ],
        orgs: []
    }

    inputClickHandler() {
        this.opickerToToVisible = true
    }

    selectedHandler({ users, orgs }) {
        this.item.users = users
        this.item.orgs = orgs
    }
}
```

@Prop({ default: '选择人员' }) title: string
    @Prop({ default: 'multiple' }) selectionMode: string
    @Prop({ default: 'orgAndUser' }) mode: string
    @Prop() rootOrgCode: string
    @Prop({ default: false }) visible: boolean
    @Prop({ default: false }) isShowGlobal: boolean
    @Prop({}) defaultUsers: NameValue[]
    @Prop({}) defaultOrgs: NameValue[]
    @Prop() names: string
    @Prop() codes: string


## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| title | 标题 | *string* | `选择人员` |
| selection-mode | 选择模式，可选值`single` | *string* | `multiple` |
| mode | 模式，可以选`user` | *string* | `orgAndUser` |
| rootOrgCode | 根机构的OrgCode | *string* | - |
| visible 支持`.sync`语法 | 是否显示 | *boolean* | `false` |
| is-show-global | 是否显示全部单位 | *boolean* | `false` |
| default-users | 第一次默认选中的用户集合 | *NameValue* | `[]` |
| default-orgs | 第一次默认选中的机构集合 | *NameValue* | `[]` |
| names 支持`.sync`语法 | 选中选名称集合，以,分割的文本 | *string* | - |
| codes 支持`.sync`语法 | 选中选值集合，以,分割的文本 | *string* | - |


### NameValue
| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 名称 | *string* | - |
| value | 值 | *string* | - |
| data | 额外数据 | *any* | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| selected | 选择完成后触发 | *event:SelectedEventArgs* |

### SelectedEventArgs
selected 事件回调参数类型

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| users | 用户集合 | *NameValue[]* | [] |
| orgs | 机构集合 | *NameValue[]* | [] |
| userNames | 用户名称,分割的文本 | *string* | '' |
| userValues | 用户值集合,分割的文本 | *string* | '' |
| orgNames | 机构名称,分割的文本 | *string* | '' |
| orgValues | 机构值,分割的文本 | *string* | '' |
| names | 用户和机构名称,分割的文本 | *string* | '' |
| values | 用户和机构值,分割的文本 | *string* | '' |
