# Upload 上传控件

### 介绍

选人控件，默认当前单位选择

### 引入

```js
import { Upload } from '@belvoly-vue-aioa/m-ui';

```

## 代码演示

### 基础用法

```html
<upload ref="upload" :action="actionUrl" :limit="4" :fileList="fileList" :typeCode="typeCode" :refTableName="refTableName" :isEditFile="true" @change="changeHandler" />

```

```ts
import { Vue, Component } from 'vue-property-decorator'
import { Upload } from '@belvoly-vue-aioa/m-ui';
@Component({
    components: {
        Upload
    }
})
export default class UploadIndex extends Vue {
    actionUrl = `http://192.168.101.135:2001/api/sharedservice/blob/upload`
    typeCode = 'demo'
    refTableName = 'FRONTEND_TEST'
    fileList = [
        {
            id: '30cfe4ac-6635-4bff-8bae-721c3247605a',
            refTableID: '302df60ca8a94cfe8d7cc1f7b64c0d45',
            refTableName: 'CALENDAR_MYCALENDAR',
            displayName: '155058843.docx',
            persistentType: 0,
            contentType: 'image/jpeg',
            name: '155058843',
            extension: '.jpg',
            content: null,
            length: 23100,
            relativePath: 'CALENDAR_MYCALENDAR\\20200331',
            internalName: '8c4d33f1-c92b-4306-9332-d1c357c7ec7b.jpg',
            typeCode: null,
            isDelete: 0,
            extraData: null,
            sequence: 0,
            creatorID: 'xiejianyun',
            creatorName: '谢建云',
            createTime: '2020-03-31 16:51:53',
            updateTime: '2020-03-31 16:51:53',
            url: 'http://192.168.101.135:2001/api/sharedservice/blob/30cfe4ac-6635-4bff-8bae-721c3247605a',
            downTimes: 0
        },
        {
            id: 'f3880c0f-e022-4523-98c8-535fe84beb4e',
            refTableID: '302df60ca8a94cfe8d7cc1f7b64c0d45',
            refTableName: 'CALENDAR_MYCALENDAR',
            displayName: '155058843.xls',
            persistentType: 0,
            contentType: 'image/jpeg',
            name: '155058843',
            extension: '.jpg',
            content: null,
            length: 23100,
            relativePath: 'CALENDAR_MYCALENDAR\\20200331',
            internalName: '6599bbb1-2180-4fde-9aae-fda56bb2106f.jpg',
            typeCode: null,
            isDelete: 0,
            extraData: null,
            sequence: 0,
            creatorID: 'xiejianyun',
            creatorName: '谢建云',
            createTime: '2020-03-31 16:52:14',
            updateTime: '2020-03-31 16:52:14',
            url: 'http://192.168.101.135:2001/api/sharedservice/blob/f3880c0f-e022-4523-98c8-535fe84beb4e',
            downTimes: 0
        },
        {
            id: 'f6b80c23-41d2-42f1-8743-75f4190d123f',
            refTableID: '302df60ca8a94cfe8d7cc1f7b64c0d45',
            refTableName: 'CALENDAR_MYCALENDAR',
            displayName: '155058843.jpg',
            persistentType: 0,
            contentType: 'image/jpeg',
            name: '155058843',
            extension: '.jpg',
            content: null,
            length: 190124,
            relativePath: 'CALENDAR_MYCALENDAR\\20200331',
            internalName: '39d675c8-85ca-4683-a03b-f3fa3c0498d1.jpg',
            typeCode: 'undefined',
            isDelete: 0,
            extraData: null,
            sequence: 0,
            creatorID: 'xiejianyun',
            creatorName: null,
            createTime: '2020-03-31 17:15:02',
            updateTime: '2020-03-31 17:15:02',
            url: 'http://192.168.101.135:2001/api/sharedservice/blob/f6b80c23-41d2-42f1-8743-75f4190d123f',
            downTimes: 0
        }
    ]

    imageList = []

    changeHandler(files) {
        console.log('change', files)
    }

    loading = false

    async saveHandler() {
        // 先保存业务代码，返回业务ID
        const id = 'XXX-XXX-XX'
        const upload: any = this.$refs.upload
        this.loading = true
        await upload.updateRelevance(id)
        this.loading = false
    }
}
```


### 只读模式

```html
<upload  :fileList="fileList"  readonly />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| label | 标题 | *string* | `附件` |
| action | 上传的API地址 | *string* | `${config.api.baseURI}/sharedservice/blob/upload` |
| multiple | [是否开启图片多选，部分安卓机型不支持](#/zh-CN/uploader) | *boolean* | `true` |
| fileList | 第一次显示文件集合 | *file[]* | `[]` |
| visible 支持`.sync`语法 | 是否显示 | *boolean* | `false` |
| refTableName | 共享附件接口`refTableName`参数 | *string* | - |
| typeCode | 共享附件接口`typeCode`参数 | *string* | - |
| userUid | 当前用户的`userUid` | *string* | - |
| maxSize | 最多只能上传多少MB内容 | *number* | `50` |
| limit | 最多可以上传多少个文件 | *number* | `9999` |
| isOnlyImage | 是否只允许图片 | *boolean* | `false` |
| readonly | 是否只读模式 | *boolean* | `false` |
| beforeUpload | 上传前验证，Promise 异常，则取消上传 | *Promise<void>* | - |


### NameValue
| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 名称 | *string* | - |
| value | 值 | *string* | - |
| data | 额外数据 | *any* | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 上传完成后触发 | *files[]* |

### Methods

| 方法名 | 说明 | 回调参数 |
|------|------|------|
| updateRelevance| 更新关联业务表记录ID | refTableID: *string* |