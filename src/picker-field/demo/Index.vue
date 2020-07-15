<template>
  <demo-section>
    <demo-block title="基本">
      <bvan-picker-field v-model="c" label="城市" show-toolbar :columns="singleColumns" @change="onChange1" />
    </demo-block>

    <demo-block title="数字值">
      <bvan-picker-field v-model="num" label="类型" show-toolbar :columns="singleNums"/>
    </demo-block>
    <demo-block title="form模式">
      <bvan-picker-field form v-model="num" label="类型" show-toolbar :columns="singleNums"/>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      c: '2',
      singleColumns: [{
        text: '一', value: '1',
      }, {
        text: '二', value: '2',
      }],
      num: null,
      singleNums: [{
        text: '零',
        value: 0
      },{
        text: '一',
        value: 1
      }],
      multipleColumns: [{
        values: [{
          text: '一', value: '1',
        }, {
          text: '二', value: '2',
        }],
      }, {
        values: [{
          text: '一一', value: '11',
        }],
      }],
      jilianColumns: [{
        text: '上海',
        value: 'shanghai',
        children: [{
          text: '黄浦',
          value: 'huangpu',
        },
        {
          text: '浦东',
          value: 'pd',
        }],
      }, {
        text: '北京',
        value: 'beijing',
        children: [{
          text: '海淀',
          value: 'hd',
        }],
      }],
    };
  },
  methods: {
    onChange1(picker, value, index) {
      console.log('change1', picker, value, index);
    },
    onChange2(picker, value, index) {
      console.log('change2', picker, value, index);
    },
    onChange3(picker, value, index) {
      console.log('change3', picker, value, index);
    },
  },
};
</script>
