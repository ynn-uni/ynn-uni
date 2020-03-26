<template>
  <view class="container">
    <view class="login">
      <view class="content">
        <image src="../../static/images/login_logo.gif" mode />
        <text>重庆市肿瘤医院I期临床试验中心</text>
        <button open-type="getUserInfo" @getuserinfo="getUserInfo">微信授权登录</button>
        <!-- <button v-if="!a" class="animation-slide-right" data-class="slide-right" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">电话号授权</button> -->
      </view>
    </view>
  </view>
</template>

<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex'
  export default {
    data() {
      return {
        a: true,
        isregist: true
      }
    },
    computed: {
      ...mapGetters(['token'])
    },
    watch: {
      token(val, old) {
        if (val !== old) {
          uni.navigateBack({
            delta: 1
          })
        }
      }
    },
    onLoad() {},
    methods: {
      ...mapMutations('user', ['updateUserInfo']),
      ...mapActions('user', ['fatchDevListByToken', 'loginWithUserInfo']),
      getUserInfo(evt) {
        const { iv, encryptedData, errMsg } = evt.detail
        if (errMsg === 'getUserInfo:ok') {
          this.loginWithUserInfo({ iv, encryptedData })
        }
      },
      getPhoneNumber(e) {
        console.log(e)
        //此处向后台发送sessionKey、iv、encryptedData让后台获取用户手机号的代码
        uni.switchTab({
          url: '/pages/home/home'
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 200rpx);
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      image {
        width: 400rpx;
        height: 400rpx;
      }
      text {
        font-size: 36rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        line-height: 50rpx;
      }
      button {
        margin-top: 50rpx;
        background-color: #3acf71;
        color: #fff;
      }
    }
  }
</style>
