<template>
  <view class="cu-form-group">
    <view class="title">
      <text class="record-icon cuIcon color-primary" :class="icon" />
      {{ title }}
    </view>
    <picker @change="handleChange" :value="valueIndex" :range="range" :range-key="rangeKey">
      <view class="picker">{{ valueLabel }}</view>
    </picker>
    <view v-if="error" class="error-tips color-error">{{ error }}</view>
  </view>
</template>

<script>
  export default {
    name: 'RecordSelect',
    props: {
      value: {
        type: [String, Number, Boolean],
        default: ''
      },
      icon: {
        type: String,
        default: 'cuIcon-formfill'
      },
      title: {
        type: String,
        default: ''
      },
      range: {
        type: Array,
        default: () => []
      },
      rangeKey: {
        type: String,
        default: 'text'
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
      valueLabel() {
        const selected = this.range.filter(i => {
          return i.value == this.value
        })
        if (selected[0]) {
          return selected[0].text
        }
        return ''
      },
      valueIndex() {
        let res
        this.range.forEach((i, idx) => {
          if (i.value == this.value) {
            res = idx
          }
        })
        return res
      }
    },
    mounted() {},
    methods: {
      handleChange(e) {
        this.$emit('input', e.target.value)
      }
    }
  }
</script>
