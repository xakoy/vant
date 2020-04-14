<template>
  <demo-block :title="t('fieldType')">
    <bvan-form @submit="onSubmit">
      <bvan-field name="switch" :label="t('switch')">
        <template #input>
          <bvan-switch v-model="switchChecked" size="20" />
        </template>
      </bvan-field>

      <bvan-field name="checkbox" :label="t('checkbox')">
        <template #input>
          <bvan-checkbox v-model="checkbox" shape="square" />
        </template>
      </bvan-field>

      <bvan-field name="checkboxGroup" :label="t('checkboxGroup')">
        <template #input>
          <bvan-checkbox-group v-model="checkboxGroup" direction="horizontal">
            <bvan-checkbox name="1" shape="square">
              {{ t('checkbox') }} 1
            </bvan-checkbox>
            <bvan-checkbox name="2" shape="square">
              {{ t('checkbox') }} 2
            </bvan-checkbox>
          </bvan-checkbox-group>
        </template>
      </bvan-field>

      <bvan-field name="radio" :label="t('radio')">
        <template #input>
          <bvan-radio-group v-model="radio" direction="horizontal">
            <bvan-radio name="1">{{ t('radio') }} 1</bvan-radio>
            <bvan-radio name="2">{{ t('radio') }} 2</bvan-radio>
          </bvan-radio-group>
        </template>
      </bvan-field>

      <bvan-field name="stepper" :label="t('stepper')">
        <template #input>
          <bvan-stepper v-model="stepper" />
        </template>
      </bvan-field>

      <bvan-field name="rate" :label="t('rate')">
        <template #input>
          <bvan-rate v-model="rate" />
        </template>
      </bvan-field>

      <bvan-field name="slider" :label="t('slider')">
        <template #input>
          <bvan-slider v-model="slider" />
        </template>
      </bvan-field>

      <bvan-field name="uploader" :label="t('uploader')">
        <template #input>
          <bvan-uploader v-model="uploader" max-count="2" />
        </template>
      </bvan-field>

      <field-type-picker />
      <field-type-datetime-picker />
      <field-type-area />
      <field-type-calendar />

      <div style="margin: 16px 16px 0;">
        <bvan-button round block type="info" native-type="submit">
          {{ t('submit') }}
        </bvan-button>
      </div>
    </bvan-form>
  </demo-block>
</template>

<script>
import FieldTypeArea from './FieldTypeArea';
import FieldTypePicker from './FieldTypePicker';
import FieldTypeCalendar from './FieldTypeCalendar';
import FieldTypeDatetimePicker from './FieldTypeDatetimePicker';

export default {
  i18n: {
    'zh-CN': {
      rate: '评分',
      radio: '单选框',
      submit: '提交',
      switch: '开关',
      slider: '滑块',
      picker: '选择器',
      stepper: '步进器',
      checkbox: '复选框',
      uploader: '文件上传',
      fieldType: '表单项类型',
      checkboxGroup: '复选框组',
      requireCheckbox: '请勾选复选框',
    },
    'en-US': {
      rate: 'Rate',
      radio: 'Radio',
      submit: 'Submit',
      switch: 'Switch',
      slider: 'Slider',
      picker: 'Picker',
      stepper: 'Stepper',
      checkbox: 'Checkbox',
      uploader: 'Uploader',
      fieldType: 'Field Type',
      checkboxGroup: 'Checkbox Group',
      requireCheckbox: 'Checkbox is required',
    },
  },

  components: {
    FieldTypeArea,
    FieldTypePicker,
    FieldTypeCalendar,
    FieldTypeDatetimePicker,
  },

  data() {
    return {
      rate: 3,
      radio: '1',
      slider: 50,
      stepper: 1,
      uploader: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }],
      checkbox: false,
      checkboxGroup: [],
      switchChecked: false,
    };
  },

  methods: {
    onSubmit(values) {
      console.log(values);
    },
  },
};
</script>
