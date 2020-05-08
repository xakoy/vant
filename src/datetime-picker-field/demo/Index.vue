<template>
  <demo-section>
    <demo-block title="默认">
      <bvan-datetime-picker-field label="开始日期" />
      <bvan-datetime-picker-field label="开始日期" />
      <bvan-field label="开始日期" :is-link="true" />
      <bvan-field label="开始日期" />
    </demo-block>
    <demo-block title="v-model">
      <bvan-datetime-picker-field label="开始日期" required input-align="right" type="date" value-format="YYYY年MM月DD日" v-model="x" />
      <bvan-datetime-picker-field label="开始日期" required input-align="right" value-format="YYYY年MM月DD日HH时mm分" :defaut-now="true" />
    </demo-block>
    <demo-block title="默认现在时间">
      <bvan-datetime-picker-field label="开始日期" required input-align="right" :defaut-now="true" />
    </demo-block>
    <demo-block title="time">
      <bvan-datetime-picker-field label="开始时间" required input-align="right" type="time" value-format="HH:mm" :defaut-now="true" />
    </demo-block>
    <demo-block title="year-month">
      <bvan-datetime-picker-field label="开始月份" required input-align="right" type="year-month" value-format="YYYY-MM" :defaut-now="true" />
    </demo-block>
  </demo-section>
</template>


<script>
export default {
  data() {
    return {
      x: '2020年01月09日',
    };
  },
};
</script>
