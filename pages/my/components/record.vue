<template>
  <view class="person-record pannel-shadow">
    <view class="pannel-title flex justify-between">
      <text class="text-lg text-bold">健康记录</text>
      <text class="more text-sm" @click="viewMore">查看更多</text>
    </view>
    <view class="record-list grid col-4">
      <view>
        <view class="record-item"></view>
      </view>
      <view>
        <view class="record-item"></view>
      </view>
      <view>
        <view class="record-item"></view>
      </view>
      <view>
        <view class="record-item"></view>
      </view>
      <view>
        <view class="record-item"></view>
      </view>
      <view>
        <view class="record-item"></view>
      </view>
      <view>
        <view class="record-item"></view>
      </view>
      <view>
        <view class="record-item"></view>
      </view>
    </view>
  </view>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'MyRecord',
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['token'])
    },
    methods: {
      viewMore() {
        const url = this.token ? '/pages/records/records' : '/pages/login/login'
        uni.navigateTo({
          url
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .person-record {
    margin-top: 20rpx;
    .pannel-title {
      padding: 20rpx 30rpx;
      .more {
        color: #9b9b9b;
        line-height: 44rpx;
      }
    }
    .record-list {
      .record-item {
        width: 100rpx;
        height: 100rpx;
        margin: auto;
        margin-bottom: 30rpx;
        border-radius: 12rpx;
        background: #f2f2f2;
      }
    }
  }
</style>
