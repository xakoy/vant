<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <bvan-row>
        <bvan-col span="8">span: 8</bvan-col>
        <bvan-col span="8">span: 8</bvan-col>
        <bvan-col span="8">span: 8</bvan-col>
      </bvan-row>

      <bvan-row>
        <bvan-col span="4">span: 4</bvan-col>
        <bvan-col span="10" offset="4">
          offset: 4, span: 10
        </bvan-col>
      </bvan-row>

      <bvan-row>
        <bvan-col offset="12" span="12">
          offset: 12, span: 12
        </bvan-col>
      </bvan-row>
    </demo-block>

    <demo-block :title="t('title2')">
      <bvan-row gutter="20">
        <bvan-col span="8">span: 8</bvan-col>
        <bvan-col span="8">span: 8</bvan-col>
        <bvan-col span="8">span: 8</bvan-col>
      </bvan-row>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('title3')">
      <bvan-row type="flex">
        <bvan-col span="6">span: 6</bvan-col>
        <bvan-col span="6">span: 6</bvan-col>
        <bvan-col span="6">span: 6</bvan-col>
      </bvan-row>

      <bvan-row type="flex" justify="center">
        <bvan-col span="6">span: 6</bvan-col>
        <bvan-col span="6">span: 6</bvan-col>
        <bvan-col span="6">span: 6</bvan-col>
      </bvan-row>

      <bvan-row type="flex" justify="end">
        <bvan-col span="6">span: 6</bvan-col>
        <bvan-col span="6">span: 6</bvan-col>
        <bvan-col span="6">span: 6</bvan-col>
      </bvan-row>

      <bvan-row type="flex" justify="space-between">
        <bvan-col span="6">span: 6</bvan-col>
        <bvan-col span="6">span: 6</bvan-col>
        <bvan-col span="6">span: 6</bvan-col>
      </bvan-row>

      <bvan-row type="flex" justify="space-around">
        <bvan-col span="6">span: 6</bvan-col>
        <bvan-col span="6">span: 6</bvan-col>
        <bvan-col span="6">span: 6</bvan-col>
      </bvan-row>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '在列元素之间增加间距',
      title3: 'Flex 布局',
    },
    'en-US': {
      title2: 'Column Spacing',
      title3: 'Flex Layout',
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-col {
  background: @white;

  .bvan-doc-demo-block {
    padding: 0 @padding-md;
  }

  .bvan-doc-demo-block__title {
    padding-left: 0;
  }

  .bvan-col {
    margin-bottom: 10px;
    color: @white;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: #39a9ed;
    }

    &:nth-child(even) {
      background-color: #66c6f2;
    }
  }
}
</style>
