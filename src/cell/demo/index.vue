<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <bvan-cell-group>
        <bvan-cell :title="t('cell')" :value="t('content')" />
        <bvan-cell
          :title="t('cell')"
          :value="t('content')"
          :label="t('desc')"
        />
      </bvan-cell-group>
    </demo-block>

    <demo-block :title="t('largeSize')">
      <bvan-cell :title="t('cell')" :value="t('content')" size="large" />
      <bvan-cell
        :title="t('cell')"
        :value="t('content')"
        size="large"
        :label="t('desc')"
      />
    </demo-block>

    <demo-block :title="t('showIcon')">
      <bvan-cell :title="t('cell')" :value="t('content')" icon="location-o" />
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('valueOnly')">
      <bvan-cell :value="t('content')" />
    </demo-block>

    <demo-block :title="t('showArrow')">
      <bvan-cell :title="t('cell')" is-link />
      <bvan-cell :title="t('cell')" is-link :value="t('content')" />
      <bvan-cell
        :title="t('cell')"
        is-link
        arrow-direction="down"
        :value="t('content')"
      />
    </demo-block>

    <demo-block :title="t('router')">
      <bvan-cell :title="t('urlRoute')" is-link url="/vant/mobile.html" />
      <bvan-cell :title="t('vueRoute')" is-link to="index" />
    </demo-block>

    <demo-block :title="t('groupTitle')">
      <bvan-cell-group :title="`${t('group')} 1`">
        <bvan-cell :title="t('cell')" :value="t('content')" />
      </bvan-cell-group>
      <bvan-cell-group :title="`${t('group')} 2`">
        <bvan-cell :title="t('cell')" :value="t('content')" />
      </bvan-cell-group>
    </demo-block>

    <demo-block :title="t('useSlots')">
      <bvan-cell :value="t('content')" is-link>
        <template #title>
          <span class="custom-title">{{ t('cell') }}</span>
          <bvan-tag type="danger">{{ t('tag') }}</bvan-tag>
        </template>
      </bvan-cell>

      <bvan-cell icon="shop-o" :title="t('cell')">
        <template #right-icon>
          <bvan-icon name="search" style="line-height: inherit;" />
        </template>
      </bvan-cell>
    </demo-block>

    <demo-block :title="t('verticalCenter')">
      <bvan-cell
        center
        :title="t('cell')"
        :value="t('content')"
        :label="t('desc')"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      cell: '单元格',
      valueOnly: '只设置 value',
      showIcon: '展示图标',
      showArrow: '展示箭头',
      largeSize: '单元格大小',
      group: '分组',
      groupTitle: '分组标题',
      router: '页面导航',
      urlRoute: 'URL 跳转',
      vueRoute: '路由跳转',
      useSlots: '使用插槽',
      verticalCenter: '垂直居中',
    },
    'en-US': {
      cell: 'Cell title',
      valueOnly: 'Value only',
      showIcon: 'Left Icon',
      showArrow: 'Link',
      largeSize: 'Size',
      group: 'Group',
      groupTitle: 'Group Title',
      router: 'Router',
      urlRoute: 'URL',
      vueRoute: 'Vue Router',
      useSlots: 'Use Slots',
      verticalCenter: 'Vertical center',
    },
  },
};
</script>

<style lang="less">
.demo-cell {
  .custom-title {
    margin-right: 5px;
    vertical-align: middle;
  }
}
</style>
