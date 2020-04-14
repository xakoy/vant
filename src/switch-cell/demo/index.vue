<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <bvan-cell-group>
        <bvan-switch-cell v-model="checked" :title="t('title')" />
      </bvan-cell-group>
    </demo-block>

    <demo-block :title="t('disabled')">
      <bvan-cell-group>
        <bvan-switch-cell v-model="checked" disabled :title="t('title')" />
      </bvan-cell-group>
    </demo-block>

    <demo-block :title="t('loadingStatus')">
      <bvan-cell-group>
        <bvan-switch-cell v-model="checked" loading :title="t('title')" />
      </bvan-cell-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
    };
  },
};
</script>
