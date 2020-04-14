<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <bvan-panel :title="t('title')" :desc="t('desc')" :status="t('status')">
        <div>{{ t('content') }}</div>
      </bvan-panel>
    </demo-block>

    <demo-block :title="t('advancedUsage')">
      <bvan-panel :title="t('title')" :desc="t('desc')" :status="t('status')">
        <div>{{ t('content') }}</div>
        <template #footer>
          <bvan-button size="small">{{ t('button') }}</bvan-button>
          <bvan-button size="small" type="danger">
            {{ t('button') }}
          </bvan-button>
        </template>
      </bvan-panel>
    </demo-block>
  </demo-section>
</template>

<script>
export default {};
</script>

<style lang="less">
@import '../../style/var';

.demo-panel {
  .@{module}-panel__footer {
    text-align: right;

    .@{module}-button {
      margin-left: 5px;
    }
  }

  .@{module}-panel__content {
    padding: 20px;
  }
}
</style>
