<template>
  <demo-section>
    <bvan-tabs v-model="activeTab" :color="BLUE">
      <bvan-tab :title="t('basicUsage')">
        <bvan-index-bar>
          <div v-for="index in indexList" :key="index">
            <bvan-index-anchor :index="index" />
            <bvan-cell :title="t('text')" />
            <bvan-cell :title="t('text')" />
            <bvan-cell :title="t('text')" />
          </div>
        </bvan-index-bar>
      </bvan-tab>

      <bvan-tab :title="t('customIndexList')">
        <bvan-index-bar :index-list="customIndexList">
          <div v-for="index in customIndexList" :key="index">
            <bvan-index-anchor :index="index">
              {{ t('title') + index }}
            </bvan-index-anchor>
            <bvan-cell :title="t('text')" />
            <bvan-cell :title="t('text')" />
            <bvan-cell :title="t('text')" />
          </div>
        </bvan-index-bar>
      </bvan-tab>
    </bvan-tabs>
  </demo-section>
</template>

<script>
import { BLUE } from '../../utils/constant';

export default {
  i18n: {
    'zh-CN': {
      text: '文本',
      customIndexList: '自定义索引列表',
    },
    'en-US': {
      text: 'Text',
      customIndexList: 'Custom Index List',
    },
  },

  data() {
    const indexList = [];
    const charCodeOfA = 'A'.charCodeAt(0);
    for (let i = 0; i < 26; i++) {
      indexList.push(String.fromCharCode(charCodeOfA + i));
    }

    return {
      BLUE,
      activeTab: 0,
      indexList,
      customIndexList: [1, 2, 3, 4, 5, 6, 8, 9, 10],
    };
  },
};
</script>
