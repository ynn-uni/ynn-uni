<template>
  <view class="record-form-item cu-form-group">
    <view class="title">
      <text class="record-icon cuIcon cuIcon-timefill color-primary" />
      {{ title }}
    </view>
    <picker mode="date" :value="value" start="09:01" end="21:01" @change="TimeChange">
      <view class="picker">{{ value }}</view>
    </picker>
  </view>
</template>

<script>
  export default {
    name: 'RecordDate',
    props: {
      value: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      }
    },
    data() {
      return {}
    },
    mounted() {},
    methods: {}
  }
</script>

<style lang="scss" scoped>
</style>
