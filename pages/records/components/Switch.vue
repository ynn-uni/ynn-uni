<template>
  <view class="cu-form-group record-switch">
    <view class="title">
      <text class="record-icon cuIcon color-primary" :class="icon" />
      {{ title }}
    </view>
    <switch
      class="primary radius"
      :checked="value === 1 ? true : false"
      @change="handleChange"
      :data-active="activeText"
      :data-inactive="inactiveText"
    />
    <view v-if="error" class="error-tips color-error">{{ error }}</view>
  </view>
</template>

<script>
  export default {
    name: 'RecordSwitch',
    props: {
      value: {
        type: Number,
        default: 0
      },
      icon: {
        type: String,
        default: 'cuIcon-questionfill'
      },
      title: {
        type: String,
        default: ''
      },
      /**
       * 自定义显示内容，例：是、否，Y、N
       * 选项值value必须为1或0
       */
      range: {
        type: Array,
        default: () => []
      },
      error: {
        type: String,
        default: ''
      }
    },
    data() {
      return {}
    },
    computed: {
      inactiveText() {
        return this.range.filter(i => i.value === 0)[0].text || '否'
      },
      activeText() {
        return this.range.filter(i => i.value === 1)[0].text || '是'
      }
    },
    mounted() {},
    methods: {
      handleChange(e) {
        const value = e.target.value ? 1 : 0
        this.$emit('input', value)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .record-switch {
    .wx-switch-input,
    .uni-switch-input {
      background: $uni-color-primary !important;
      border-color: $uni-color-primary !important;
    }
    switch:after,
    switch:before {
      font-family: initial;
    }
    switch:before {
      content: attr(data-inactive);
    }
    switch:after {
      content: attr(data-active);
    }
  }
</style>
