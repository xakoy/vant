<template>
  <demo-section>
    <demo-block title="基本">
      <bvan-popup-menu v-if="false">
        <bvan-popup-menu-item icon="plus" title="新建日程" />
        <bvan-popup-menu-item title="我的朋友">
          <template #icon>
            <bvan-icon name="friends-o" />
          </template>
        </bvan-popup-menu-item>
      </bvan-popup-menu>

      <bvan-popup-menu v-model="menuVisible" right="6px" top="24px">
        <bvan-popup-menu-item @click="itemClickHandler" icon="plus" title="新建日程" />
        <bvan-popup-menu-item title="我的朋友">
          <template #icon>
            <bvan-icon name="friends-o" />
          </template>
        </bvan-popup-menu-item>
      </bvan-popup-menu>

      <bvan-cell-group title="标题">
        <template #value>
          <bvan-icon name="plus" @click="menuVisible = true" />
        </template>
        <bvan-cell is-link title="测试cell" />
      </bvan-cell-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      menuVisible: false,
    };
  },
  methods: {
    itemClickHandler() {
    },
  },
};
</script>
