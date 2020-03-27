<template>
  <view class="container">
    <view class="rec-review">
      <image v-if="status==0" src="../../static/icons/review.png" mode />
      <image v-if="status==1" src="../../static/icons/check-circle.png" mode />
      <image v-if="status==2" src="../../static/icons/close.png" mode />
      <view class="text" v-if="status==0">资料提交成功（正在审核）</view>
      <view class="text" v-if="status==1||status==2">资料审核通过</view>
      <view class="text" v-if="status==2">您的条件不符合</view>
      <view class="text" v-if="status==0||status==1">工作人员会在2个工作日内电话联系您！</view>
      <view class="thank">感谢您对临床科研的支持与贡献！</view>
      <button @click="back">返回</button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        status: 0
      }
    },
    onLoad(option) {
      this.status = option.status
    },
    methods: {
      back() {
        uni.navigateBack({
          delta: 1
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .rec-review {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 32rpx;
    color: rgba(74, 74, 74, 1);
    image {
      width: 172rpx;
      height: 172rpx;
      margin-top: 116rpx;
      margin-bottom: 74rpx;
    }
    .text {
      line-height: 48rpx;
    }
    .thank {
      margin-top: 70rpx;
    }
    button {
      color: #fff;
      width: 280rpx;
      line-height: 100rpx;
      background: rgba(59, 205, 174, 1);
      border-radius: 50rpx;
      margin-top: 166rpx;
      font-size: 28rpx;
    }
  }
</style>
