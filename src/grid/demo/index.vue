<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <bvan-grid>
        <bvan-grid-item
          v-for="i in 4"
          :key="i"
          icon="photo-o"
          :text="t('text')"
        />
      </bvan-grid>
    </demo-block>

    <demo-block :title="t('columnNum')">
      <bvan-grid :column-num="3">
        <bvan-grid-item
          v-for="i in 6"
          :key="i"
          icon="photo-o"
          :text="t('text')"
        />
      </bvan-grid>
    </demo-block>

    <demo-block :title="t('customContent')">
      <bvan-grid :border="false" :column-num="3">
        <bvan-grid-item>
          <bvan-image
            fit="contain"
            src="https://img.yzcdn.cn/vant/apple-1.jpg"
          />
        </bvan-grid-item>
        <bvan-grid-item>
          <bvan-image
            fit="contain"
            src="https://img.yzcdn.cn/vant/apple-2.jpg"
          />
        </bvan-grid-item>
        <bvan-grid-item>
          <bvan-image
            fit="contain"
            src="https://img.yzcdn.cn/vant/apple-3.jpg"
          />
        </bvan-grid-item>
      </bvan-grid>
    </demo-block>

    <demo-block :title="t('square')">
      <bvan-grid square>
        <bvan-grid-item
          v-for="i in 8"
          :key="i"
          icon="photo-o"
          :text="t('text')"
        />
      </bvan-grid>
    </demo-block>

    <demo-block :title="t('gutter')">
      <bvan-grid :gutter="10">
        <bvan-grid-item
          v-for="i in 8"
          :key="i"
          icon="photo-o"
          :text="t('text')"
        />
      </bvan-grid>
    </demo-block>

    <demo-block :title="t('route')">
      <bvan-grid clickable :column-num="2">
        <bvan-grid-item icon="home-o" :text="t('vueRoute')" to="/" />
        <bvan-grid-item
          icon="search"
          :text="t('urlRoute')"
          url="/vant/mobile.html"
        />
      </bvan-grid>
    </demo-block>

    <demo-block :title="t('showBadge')">
      <bvan-grid :column-num="2">
        <bvan-grid-item icon="home-o" :text="t('text')" dot />
        <bvan-grid-item icon="search" :text="t('text')" badge="99+" />
      </bvan-grid>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '文字',
      route: '页面导航',
      gutter: '格子间距',
      square: '正方形格子',
      columnNum: '自定义列数',
      customContent: '自定义内容',
      urlRoute: 'URL 跳转',
      vueRoute: '路由跳转',
      showBadge: '徽标提示',
    },
    'en-US': {
      text: 'Text',
      route: 'Route',
      gutter: 'Gutter',
      square: 'Square',
      columnNum: 'Column Num',
      customContent: 'Custom Content',
      urlRoute: 'URL',
      vueRoute: 'Vue Router',
      showBadge: 'Show Badge',
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';
</style>
