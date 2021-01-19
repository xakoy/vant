<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <bvan-popover
        v-model="show.lightTheme"
        trigger="click"
        :actions="t('actions')"
        placement="bottom-start"
        style="margin-left: 16px;"
        @select="onSelect"
      >
        <template #reference>
          <bvan-button type="primary">
            {{ t('lightTheme') }}
          </bvan-button>
        </template>
      </bvan-popover>
      <bvan-popover
        v-model="show.darkTheme"
        theme="dark"
        trigger="click"
        :actions="t('actions')"
        style="margin-left: 16px;"
        @select="onSelect"
      >
        <template #reference>
          <bvan-button type="primary">
            {{ t('darkTheme') }}
          </bvan-button>
        </template>
      </bvan-popover>
      <bvan-popover
        v-model="custom"
        theme="dark"
        trigger="click"
        :actions="t('actions')"
        style="margin-left: 16px;"
        :stopOnceOnClick ="true"
        @select="onSelect"
      >
        <bvan-popover-menu-item title="选项一" icon="plus"></bvan-popover-menu-item>
        <bvan-popover-menu-item title="选项二三" @click="customItemClick('选项二三')">
          <template #icon>
            <bvan-icon class="bvan-popover__action-icon" name="friends-o" />
          </template>
        </bvan-popover-menu-item>

        <template #reference>
          <bvan-button type="primary">
            自定义内容
          </bvan-button>
        </template>
      </bvan-popover>
    </demo-block>

    <demo-block>
      
        

      <!-- <bvan-popup-menu v-model="menuVisible" right="6px" top="24px">
        <bvan-popup-menu-item @click="itemClickHandler" icon="plus" title="新建日程" />
        <bvan-popup-menu-item title="我的朋友">
          <template #icon>
            <bvan-icon name="friends-o" />
          </template>
        </bvan-popup-menu-item>
      </bvan-popup-menu> -->

      <bvan-cell-group title="标题">
        <template #value>
          <bvan-popover
        v-model="menuVisible"
        theme="dark"
        :offset=[12,8]
        :arrowStyle="{right: '8px'}"
        trigger="click"
        :actions="t('actions')"
        style="margin-left: 16px;"
        :stopOnceOnClick ="true"
        placement="bottom-end"
        @select="onSelect"
      >
        <bvan-popover-menu-item title="选项一" icon="plus"></bvan-popover-menu-item>
        <bvan-popover-menu-item title="选项二三" @click="itemClickHandler('选项二三')">
          <template #icon>
            <bvan-icon class="bvan-popover__action-icon" name="friends-o" />
          </template>
        </bvan-popover-menu-item>
        <template #reference>
          <bvan-icon name="plus" />
          </template>
      </bvan-popover>
        </template>
        <bvan-cell is-link title="测试cell" />
      </bvan-cell-group>
    </demo-block>

    <demo-block :title="t('placement')">
      <bvan-field
        is-link
        readonly
        name="picker"
        :label="t('choosePlacement')"
        @click="showPicker = true"
      />

      <bvan-popup
        v-model="showPicker"
        round
        position="bottom"
        get-container="body"
      >
        <div class="demo-popover-box">
          <bvan-popover
            v-model="show.placement"
            theme="dark"
            trigger="click"
            :actions="t('shortActions')"
            :placement="currentPlacement"
            @select="onSelect"
          >
            <template #reference>
              <div class="demo-popover-refer" />
            </template>
          </bvan-popover>
        </div>
        <bvan-picker :columns="placements" @change="onPickerChange" />
      </bvan-popup>
    </demo-block>


    <demo-block :title="t('actionOptions')">
      <bvan-popover
        v-model="show.showIcon"
        trigger="click"
        :actions="t('actionsWithIcon')"
        placement="bottom-start"
        style="margin-left: 16px;"
        @select="onSelect"
      >
        <template #reference>
          <bvan-button type="primary">
            {{ t('showIcon') }}
          </bvan-button>
        </template>
      </bvan-popover>

      <bvan-popover
        v-model="show.disableAction"
        trigger="click"
        :actions="t('actionsDisabled')"
        style="margin-left: 16px;"
        @select="onSelect"
      >
        <template #reference>
          <bvan-button type="primary">
            {{ t('disableAction') }}
          </bvan-button>
        </template>
      </bvan-popover>
    </demo-block>

    <demo-block :title="t('customContent')">
      <bvan-popover
        v-model="show.customContent"
        trigger="click"
        placement="top-start"
        style="margin-left: 16px;"
        @select="onSelect"
      >
        <bvan-grid
          square
          clickable
          :border="false"
          column-num="3"
          style="width: 240px;"
        >
          <bvan-grid-item
            v-for="i in 6"
            :key="i"
            icon="photo-o"
            :text="t('option')"
            @click="show.customContent = false"
          />
        </bvan-grid>
        <template #reference>
          <bvan-button type="primary">
            {{ t('customContent') }}
          </bvan-button>
        </template>
      </bvan-popover>
    </demo-block>
  </demo-section>
</template>

<script>
import Toast from '../../toast';

export default {
  i18n: {
    'zh-CN': {
      actions: [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }],
      shortActions: [{ text: '选项一' }, { text: '选项二' }],
      actionsWithIcon: [
        { text: '选项一', icon: 'add-o' },
        { text: '选项二', icon: 'music-o' },
        { text: '选项三', icon: 'more-o' },
      ],
      actionsDisabled: [
        { text: '选项一', disabled: true },
        { text: '选项二', disabled: true },
        { text: '选项三' },
      ],
      showIcon: '展示图标',
      placement: '弹出位置',
      darkTheme: '深色风格',
      lightTheme: '浅色风格',
      showPopover: '点击弹出气泡',
      actionOptions: '选项配置',
      customContent: '自定义内容',
      disableAction: '禁用选项',
      choosePlacement: '选择弹出位置',
    },
    'en-US': {
      actions: [
        { text: 'Option 1' },
        { text: 'Option 2' },
        { text: 'Option 3' },
      ],
      shortActions: [{ text: 'Option 1' }, { text: 'Option 2' }],
      actionsWithIcon: [
        { text: 'Option 1', icon: 'add-o' },
        { text: 'Option 2', icon: 'music-o' },
        { text: 'Option 3', icon: 'more-o' },
      ],
      actionsDisabled: [
        { text: 'Option 1', disabled: true },
        { text: 'Option 2', disabled: true },
        { text: 'Option 3' },
      ],
      showIcon: 'Show Icon',
      placement: 'Placement',
      darkTheme: 'Dark Theme',
      lightTheme: 'Light Theme',
      showPopover: 'Show Popover',
      actionOptions: 'Action Options',
      customContent: 'Custom Content',
      disableAction: 'Disable Action',
      choosePlacement: 'Placement',
    },
  },

  data() {
    return {
      show: {
        showIcon: false,
        placement: false,
        darkTheme: false,
        lightTheme: false,
        customContent: false,
        disableAction: false,
      },
      menuVisible: false,
      custom: false,
      showPicker: false,
      currentPlacement: 'top',
      placements: [
        'top',
        'top-start',
        'top-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end',
        'bottom',
        'bottom-start',
        'bottom-end',
      ],
    };
  },

  methods: {
    onPickerChange(picker, value) {
      setTimeout(() => {
        this.show.placement = true;
        this.currentPlacement = value;
      });
    },
    onSelect(action) {
      Toast(action.text);
    },
    customItemClick(msg) {
      Toast(msg)
      this.custom = false
    },
    itemClickHandler() {
      this.menuVisible = false
    }
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-popover {
  &-refer {
    width: 60px;
    height: 60px;
    background-color: @blue;
    border-radius: 8px;
  }

  .bvan-field {
    width: auto;
    margin: 0 12px;
    overflow: hidden;
    border-radius: 8px;
  }

  &-box {
    display: flex;
    justify-content: center;
    margin: 110px 0;
  }
}
</style>
