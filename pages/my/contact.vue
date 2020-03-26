<template>
  <view class="container">
    <view class="contact flex justify-center">
      <view>
        <view class="text-center">
          <image class="contact-image" src="../../static/images/login_logo.gif" />
        </view>
        <view class="contact-info flex flex-direction text-sm text-center">
          <text>地址：重庆市沙坪坝区汉渝路181号（内科医技楼22楼）</text>
          <text>邮编：400030</text>
          <text>GCP机构办：023-65456552；gcp6552@163.com</text>
          <text>I期临床试验研究室：023-65079277；023-65079275</text>
          <text>辇伟奇（PI）：13883652913；trialone@cqprecision.cn</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .container {
    min-height: 100vh;

    .contact {
      height: 100%;
      padding-top: 200rpx;
      .contact-image {
        width: 430rpx;
        height: 430rpx;
        margin-bottom: 60rpx;
        background-size: cover;
      }
      .contact-info {
        margin: auto;
        color: #737373;
        line-height: 1.5em;
      }
    }
  }
</style>
