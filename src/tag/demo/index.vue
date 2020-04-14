<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <bvan-tag>{{ t('tag') }}</bvan-tag>
      <bvan-tag type="primary">{{ t('tag') }}</bvan-tag>
      <bvan-tag type="success">{{ t('tag') }}</bvan-tag>
      <bvan-tag type="danger">{{ t('tag') }}</bvan-tag>
      <bvan-tag type="warning">{{ t('tag') }}</bvan-tag>
    </demo-block>

    <demo-block :title="t('round')">
      <bvan-tag round>{{ t('tag') }}</bvan-tag>
      <bvan-tag round type="primary">{{ t('tag') }}</bvan-tag>
      <bvan-tag round type="success">{{ t('tag') }}</bvan-tag>
      <bvan-tag round type="danger">{{ t('tag') }}</bvan-tag>
      <bvan-tag round type="warning">{{ t('tag') }}</bvan-tag>
    </demo-block>

    <demo-block :title="t('mark')">
      <bvan-tag mark>{{ t('tag') }}</bvan-tag>
      <bvan-tag mark type="primary">{{ t('tag') }}</bvan-tag>
      <bvan-tag mark type="success">{{ t('tag') }}</bvan-tag>
      <bvan-tag mark type="danger">{{ t('tag') }}</bvan-tag>
      <bvan-tag mark type="warning">{{ t('tag') }}</bvan-tag>
    </demo-block>

    <demo-block :title="t('plain')">
      <bvan-tag plain>{{ t('tag') }}</bvan-tag>
      <bvan-tag plain type="primary">{{ t('tag') }}</bvan-tag>
      <bvan-tag plain type="success">{{ t('tag') }}</bvan-tag>
      <bvan-tag plain type="danger">{{ t('tag') }}</bvan-tag>
      <bvan-tag plain type="warning">{{ t('tag') }}</bvan-tag>
    </demo-block>

    <demo-block :title="t('customColor')">
      <bvan-tag color="#f2826a">{{ t('tag') }}</bvan-tag>
      <bvan-tag color="#f2826a" plain>{{ t('tag') }}</bvan-tag>
      <bvan-tag color="#7232dd">{{ t('tag') }}</bvan-tag>
      <bvan-tag color="#7232dd" plain>{{ t('tag') }}</bvan-tag>
      <bvan-tag color="#ffe1e1" text-color="#ad0000">{{ t('tag') }}</bvan-tag>
    </demo-block>

    <demo-block :title="t('customSize')">
      <bvan-tag type="success">{{ t('tag') }}</bvan-tag>
      <bvan-tag type="success" size="medium">{{ t('tag') }}</bvan-tag>
      <bvan-tag type="success" size="large">{{ t('tag') }}</bvan-tag>
    </demo-block>

    <demo-block :title="t('closeable')">
      <bvan-tag
        v-if="show.primary"
        size="medium"
        closeable
        type="primary"
        @close="close('primary')"
      >
        {{ t('tag') }}
      </bvan-tag>
      <bvan-tag
        v-if="show.success"
        size="medium"
        closeable
        type="success"
        @close="close('success')"
      >
        {{ t('tag') }}
      </bvan-tag>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      plain: '空心样式',
      round: '圆角样式',
      mark: '标记样式',
      closeable: '可关闭标签',
      customColor: '自定义颜色',
      customSize: '标签大小',
    },
    'en-US': {
      plain: 'Plain style',
      round: 'Round style',
      mark: 'Mark style',
      closeable: 'Closeable',
      customColor: 'Custom Color',
      customSize: 'Custom Size',
    },
  },

  data() {
    return {
      show: {
        primary: true,
        success: true,
      },
    };
  },

  methods: {
    close(tag) {
      this.show[tag] = false;
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-tag {
  background-color: @white;

  .@{module}-tag {
    &:first-of-type {
      margin-left: @padding-md;
    }
  }

  .@{module}-tag + .@{module}-tag {
    margin-left: @padding-xs;
  }
}
</style>
