<template>
  <demo-block :title="t('basicUsage')">
    <bvan-cell-group>
      <bvan-field v-model="value" :placeholder="t('placeholder')" />
    </bvan-cell-group>
    <bvan-cell-group>
      <bvan-field form v-model="value" :placeholder="t('placeholder')" />
    </bvan-cell-group>
  </demo-block>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      placeholder: '请输入文本',
    },
    'en-US': {
      placeholder: 'Text',
    },
  },

  data() {
    return {
      value: '',
    };
  },
};
</script>
