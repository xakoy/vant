<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <bvan-empty :description="t('description')" />
    </demo-block>

    <demo-block :title="t('imageType')">
      <bvan-tabs v-model="active">
        <bvan-tab name="error" :title="t('error')">
          <bvan-empty image="error" :description="t('description')" />
        </bvan-tab>
        <bvan-tab name="network" :title="t('network')">
          <bvan-empty image="network" :description="t('description')" />
        </bvan-tab>
        <bvan-tab name="search" :title="t('search')">
          <bvan-empty image="search" :description="t('description')" />
        </bvan-tab>
      </bvan-tabs>
    </demo-block>

    <demo-block :title="t('customImage')">
      <bvan-empty
        class="custom-image"
        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
        :description="t('description')"
      />
    </demo-block>

    <demo-block :title="t('bottomContent')">
      <bvan-empty :description="t('description')">
        <bvan-button round type="danger" class="bottom-button">
          {{ t('button') }}
        </bvan-button>
      </bvan-empty>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      error: '通用错误',
      search: '搜索提示',
      network: '网络错误',
      imageType: '图片类型',
      description: '描述文字',
      customImage: '自定义图片',
      bottomContent: '底部内容',
    },
    'en-US': {
      error: 'Error',
      search: 'Search',
      network: 'Network',
      imageType: 'Image Type',
      description: 'Description',
      customImage: 'Custom Image',
      bottomContent: 'Bottom Content',
    },
  },

  data() {
    return {
      active: 'error',
    };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-empty {
  background: @white;

  .custom-image {
    .van-empty__image {
      width: 90px;
      height: 90px;
    }
  }

  .bottom-button {
    width: 160px;
  }
}
</style>
