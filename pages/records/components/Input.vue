<template>
  <view class="cu-form-group">
    <view class="title">
      <text class="record-icon cuIcon color-primary" :class="icon" />
      {{ title }}
    </view>
    <input
      :value="value"
      :placeholder="`请输入${ title }`"
      :type="inputType"
      placeholder-class="record-placeholder"
      @change="handleChange"
    />
    <view v-if="error" class="error-tips color-error">{{ error }}</view>
  </view>
</template>

<script>
  export default {
    name: 'RecordInput',
    props: {
      value: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: 'cuIcon-writefill'
      },
      title: {
        type: String,
        default: ''
      },
      nativeType: {
        type: String,
        default: 'string'
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
      inputType() {
        if (this.nativeType === 'number') {
          return 'digit'
        }
        return 'text'
      }
    },
    mounted() {},
    methods: {
      handleChange(e) {
        if (this.nativeType === 'number') {
          this.$emit('input', +e.target.value)
        } else {
          this.$emit('input', e.target.value)
        }
      }
    }
  }
</script>
<style lang="scss">
  .record-placeholder {
    color: $uni-text-color-placeholder;
  }
</style>

