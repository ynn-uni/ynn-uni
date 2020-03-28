<template>
  <view class="cu-form-group record-check">
    <view class="title">
      <text class="record-icon cuIcon color-primary" :class="icon" />
      {{ title }}
    </view>
    <text class="record-icon cuIcon cuIcon-more color-info" @click="showModal" />

    <view class="cu-modal bottom-modal" :class="displayModal ? 'show' : ''" @click="hideModal">
      <view class="cu-dialog" @click.stop>
        <view class="cu-bar bg-white">
          <view class="action" @click="hideModal">取消</view>
          <view class="action color-primary" @click="hideModal">确定</view>
        </view>
        <view class="grid col-3 padding-sm">
          <view v-for="item in range" class="padding-xs" :key="item.id">
            <button
              class="cu-btn block color-white"
              :class="value.indexOf(item.value) > -1 ? 'bg-primary' : 'line-primary'"
              @click="handleChange(item.value)"
            >{{item.text}}</button>
          </view>
        </view>
      </view>
    </view>
    <view v-if="error" class="error-tips color-error">{{ error }}</view>
  </view>
</template>

<script>
  export default {
    name: 'RecordCheck',
    props: {
      value: {
        type: Array,
        default: () => []
      },
      icon: {
        type: String,
        default: 'cuIcon-squarecheckfill'
      },
      title: {
        type: String,
        default: ''
      },
      range: {
        type: Array,
        default: () => []
      },
      error: {
        type: String,
        default: ''
      }
    },
    filters: {
      classFilter(val) {
        console.log(val)
      }
    },
    data() {
      return {
        displayModal: false
      }
    },
    mounted() {},
    methods: {
      showModal() {
        this.displayModal = true
      },
      hideModal() {
        this.displayModal = false
      },
      isChecked(value) {
        return this.value.indexOf(value) > -1
      },
      handleChange(e) {
        const res = [...this.value]
        if (this.isChecked(e)) {
          const index = res.indexOf(e)
          res.splice(index, 1)
        } else {
          res.push(e)
        }

        this.$emit('input', res)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .record-check {
    .cu-dialog {
      min-height: 50vh;
    }
  }
</style>
